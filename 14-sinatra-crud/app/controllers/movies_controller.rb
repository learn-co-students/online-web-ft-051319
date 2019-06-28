class MoviesController < ApplicationController

  get '/movies' do
    #ACTION: index
    @movies = Movie.all
    erb :'movies/index'
  end

  get '/movies/new' do
    #ACTION: new
    @directors = Director.all
    @genres = Genre.all
    erb :'movies/new'
  end

  get '/movies/:id' do
    #ACTION: show
    @movie = Movie.find(params[:id])
    erb :'movies/show'
  end

  post '/movies' do
    #ACTION: create
    movie = Movie.create(params[:movie])
    redirect "/movies/#{movie.id}"
  end

  get '/movies/:id/edit' do
    #ACTION: edit
    @movie = Movie.find(params[:id])
    erb :'/movies/edit'
  end

  put '/movies/:id' do
    #ACTION: update
    movie = Movie.find(params[:id])
    movie.update(params[:movie])
    binding.pry
    redirect "/movies/#{movie.id}"
  end

  delete '/movies/:id' do
    #ACTION: delete
    movie = Movie.find(params[:id])
    movie.destroy
    redirect '/movies'
  end




end
