class Teacher < ApplicationRecord
  has_many :school_classes
  has_many :students, through: :school_classes
end
