class MoviesController < ApplicationController

  get '/movies' do
    @movies = Movie.all
    erb :movies
  end

end
