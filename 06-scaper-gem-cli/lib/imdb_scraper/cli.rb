class CLI

  def run
    system('clear')
    Scraper.scrape_imdb
    welcome
    sleep 2
    show_movies
    ask_to_select_movie
    user_input = gets.strip.to_i
    movie = Movie.find_by_index(user_input)
    show_movie_info(movie)
  end

  def welcome
    puts "Welcome to the IMDB Scraper CLI!"
  end

  def show_movies
    Movie.all.each_with_index do |movie, index|
      puts "#{index + 1}. #{movie.name}"
    end
  end

  def ask_to_select_movie
    puts "Please select the movie you would like to see more information about."
  end

  def show_movie_info(movie)
    puts movie.description
  end

end
