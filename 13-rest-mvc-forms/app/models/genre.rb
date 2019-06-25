class Genre < ActiveRecord::Base
  has_many :movies
  has_many :directors, through: :movies
end
