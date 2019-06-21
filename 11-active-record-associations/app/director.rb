class Director < ActiveRecord::Base
  has_many :movies
  has_many :genres, through: :movies

  # has_many :movies does this for us!
  # def movies
  #   Movie.all.select do |movie|
  #     movie.director == self
  # end

  # has_many :genres, through: :movies does this for us: 
  # def genres
  #   movies.map do |movie|
  #     movie.genre
  #   end
  # end
end
