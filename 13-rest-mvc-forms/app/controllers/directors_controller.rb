class DirectorsController < ApplicationController
  # we are going to build our our directors controller to follow RESTful conventions, meaning that we will have seven routes

  get '/directors' do
    @directors = Director.all
    erb :'directors/index'
  end

  get '/directors/new' do
    erb :'directors/new'
  end

  get '/directors/:id' do
    #anything after the semicolon is going to be what the parameter is passed in as
    #/directors/7 will result in {"params" => 7}
    @director = Director.find(params[:id])
    erb :'directors/show'
  end

  # post requests accept information

  post '/directors' do
    #the code here will create the information that we have sent from our form
    director = Director.create(params[:director])
    #the parameters now come from the form, not the URL
    redirect "directors/#{director.id}"
  end

end
