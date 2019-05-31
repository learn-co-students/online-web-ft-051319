class Movie

  attr_accessor :name, :description

  @@all = []

  def initialize(name, description)
    @name = name
    @description = description
    @@all << self
  end

  def self.all
    @@all
  end

  def self.find_by_index(number)
    number -= 1
    movie = @@all[number]
  end

end
