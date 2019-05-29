class Song

  attr_accessor :name, :artist

  def initialize(name)
    @name = name
  end

  def self.new_by_filename(filename)
    file_array = filename.split(" - ")
    new_song = Song.new(file_array[1])
    #make a new song from the parsed filename

    artist = Artist.find_or_create_by_name(file_array[0])
    #use info from parsed filename to find artist

    new_song.artist = artist
    new_song
    #associate the newly created song with the found or created artist
  end

end
