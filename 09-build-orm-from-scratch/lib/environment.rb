require 'sqlite3'
require_relative 'tweet.rb'
require_relative 'tweetapp.rb'

DB = SQLite3::Database.new('db/tweets.db')
#I went into the console and created the database using DB.execute("CREATE TABLE tweets") etc.

DB.results_as_hash = true
