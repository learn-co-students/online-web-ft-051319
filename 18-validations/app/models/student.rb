class Student < ApplicationRecord
  #some validations we could make:
  #1. make sure all the fields are filled in
  # validates :name, presence: true
  # validates :teacher, presence: true
  # validates :grade, presence: true
  validates_presence_of :name, :teacher, :grade
  #2. we wanna make sure the grades are from 1-12
  validates :grade, numericality: {
    only_integer: true,
    greater_than_or_equal_to: 1,
    less_than_or_equal_to: 12
  }
  #3. a student with the same name can't be in the same class
  validates :name, uniqueness: {
    scope: [:grade, :teacher],
    message: "is already in this class"
  }
  #4. teachers names must start with Mr. Mrs. or Ms.
  validate :teacher_prefix
  #5. make sure there are no numbers in names - BONUS!!!

  def teacher_prefix
    prefixes = ["Mr.", "Mrs.", "Ms."]
    found_prefix = prefixes.find do |prefix|
      length = prefix.length
      first_part_of_name = teacher[0...length]
      prefix == first_part_of_name
    end
    unless found_prefix
      self.errors.add(:teacher, "must start with Mr. Mrs. or Ms.")
    end
  end



end
