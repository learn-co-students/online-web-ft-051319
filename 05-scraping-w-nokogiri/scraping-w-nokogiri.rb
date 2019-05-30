require 'nokogiri'
require 'open-uri'
require 'pry'

class Alumni

  @@all = []

  attr_reader :name

  def initialize(name)
    @name = name
    @@all << self
  end

  def self.all
    @@all
  end

end

base_url = "https://flatironschool.com/alumni/"


html = open(base_url)

parsed_html = Nokogiri::HTML(html)

alumni_elements = parsed_html.css(".text-block.util__margin-bm")

alumni_elements.each do |element|
  Alumni.new(element.text)
end

Alumni.all.each do |alumni|
  puts alumni.name
end

#https://www.w3schools.com/cssref/css_selectors.asp
#two ways to grab elements by their css
# tag selector => div, h2, h1, p, span
# class selector uses the '.' => .yk4f6w-0 .gRWfND
