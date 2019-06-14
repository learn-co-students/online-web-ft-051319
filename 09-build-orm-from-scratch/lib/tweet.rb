class Tweet

  attr_accessor :username, :message
  attr_reader :id

  # @@all = []

  def initialize(hash)
    @id = hash["id"]
    @username = hash["username"]
    @message = hash["message"]
    # @@all << self
  end

  def self.all
    # @@all
    sql = "SELECT * FROM tweets"
    array_of_tweet_hashes = DB.execute(sql)
    array_of_tweet_hashes.map do |tweet_hash|
      Tweet.new(tweet_hash)
    end
  end

  def save
    sql = "INSERT INTO tweets (username, message) VALUES (? , ?)"
    DB.execute(sql, self.username, self.message)
    self.id = DB.execute("SELECT last_insert_rowid() FROM tweets")[0][0]
  end

end
