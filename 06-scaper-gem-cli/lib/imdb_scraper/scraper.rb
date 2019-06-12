require 'nokogiri'
require 'open-uri'
require 'pry'

IMDB_CS_MOVIES = "https://www.imdb.com/movies-coming-soon/"

class Scraper

  def self.scrape_imdb
    doc = open(https://www.nps.gov/index.htm)
    parsed_doc = Nokogiri::HTML(doc)
    grabbed_elements = parsed_doc.css(".dropdown-menu")
    binding.pry
    grabbed_elements.each do |element|
      title = element.css("h4").text.strip
      description = element.css(".outline").text.strip
      Movie.new(title, description)
    end
  end

end
