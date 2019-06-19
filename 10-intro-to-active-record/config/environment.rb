require 'bundler/setup'
Bundler.require

require_relative '../app/movie.rb'

ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: "db/development.sqlite"
)
