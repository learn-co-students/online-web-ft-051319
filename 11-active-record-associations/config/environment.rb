require 'bundler/setup'
Bundler.require

require_relative '../app/movie.rb'
require_relative '../app/director.rb'
require_relative '../app/genre.rb'


ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: "db/development.sqlite"
)
