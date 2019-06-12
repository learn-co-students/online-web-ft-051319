require 'sqlite3'
require 'pry'


db = SQLite3::Database.new('new.db')
binding.pry
