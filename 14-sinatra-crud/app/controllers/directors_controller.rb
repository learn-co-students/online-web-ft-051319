class DirectorsController < ApplicationController
  # we are going to build our our directors controller to follow RESTful conventions, meaning that we will have seven routes

  get '/directors' do
    #ACTION: index
    @directors = Director.all #this is an ActiveRecord method
    # SELECT * FROM directors, takes the rows from out database and makes Ruby instances out of them
    # we save them to instance variables and pass them to
    erb :'directors/index'
  end

  get '/directors/new' do
    #ACTION: new
    erb :'directors/new'
  end

  get '/directors/:id' do
    #ACTION: show
    #anything after the semicolon is going to be what the parameter is passed in as
    #/directors/7 will result in {"params" => 7}
    @director = Director.find(params[:id])
    erb :'directors/show'
  end

  post '/directors' do
    #ACTION: create
    #the code here will create the information that we have sent from our form
    director = Director.create(params[:director])
    #create is also an ActiveRecord method, it's saying INSERT INTO directors (name, hometown) VALUES (?, ?)
    #the parameters now come from the form, not the URL
    redirect "directors/#{director.id}"
  end

  # get '/directors/:id/:name' do
  #   # binding.pry
  #   @director = Director.find(params[:id])
  #   @director.name = params[:name]
  #   @director.save
  #   redirect "directors/#{@director.id}"
  # end

  # post requests accept information
end
