class Student < ApplicationRecord
  validates_presence_of :name, :teacher, :grade
  # validates :name, presence: true
  # validates :teacher, presence: true
  # validates :honors, presence: true
  # validates :grade, presence: true
  validates :name, uniqueness: {
    scope: [:grade, :teacher],
    message: "This student is already in this teacher's class"
  }
  validates :grade, numericality: {greater_than_or_equal_to: 1, less_than_or_equal_to: 12}
  validate :valid_teacher_name

  def valid_teacher_name
    possible_prefix = ["Mr.", "Mrs.", "Ms."]
    unless possible_prefix.find {|prefix| teacher.include?(prefix)}
      errors.add(:teacher, "A teacher must start with Mr., Mrs., or Ms.")
    end
  end

end
