class Artist

  attr_accessor :name, :songs

  @@all = []

  def initialize(name)
    @name = name
    @songs = []
    #this does not follow the SSOT principle
  end

  def self.all
    @@all
  end

  def save
    @@all << self
  end

  def add_song(song)
    @songs << song
  end

  def self.find_or_create_by_name(name)
    found_arist = @@all.find{ |artist| artist.name == name}
    if found_arist == nil
      self.new(name)
    else
      found_arist
    end
  end

end
