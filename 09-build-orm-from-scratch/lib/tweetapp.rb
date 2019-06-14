class TweetApp

  def run
    while true
      system("clear")
      puts "Welcome to the Tweet App!"
      tweet = get_user_inputs
      show_tweets
      sleep 3
    end
  end

  def get_user_inputs
    puts "What's your username?"
    username = gets.chomp
    puts "What would you like to tell the world?"
    message = gets.chomp
    tweet_hash = {"username" => username, "message" => message}
    new_tweet = Tweet.new(tweet_hash)
    new_tweet.save
  end

  def show_tweets
    Tweet.all.each do |tweet|
      puts "Username: #{tweet.username}"
      puts "Message: #{tweet.message}"
    end
  end

end
