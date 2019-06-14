require 'sqlite3'
require 'pry'


db = SQLite3::Database.new('bears.db')
binding.pry
