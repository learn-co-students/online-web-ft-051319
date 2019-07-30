class Student < ApplicationRecord
  has_many :school_classes
  has_many :teachers, through: :school_classes
end
