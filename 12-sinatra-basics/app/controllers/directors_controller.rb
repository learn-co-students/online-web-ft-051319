class DirectorsController < ApplicationController

  get '/directors' do
    @directors = Director.all
    erb :directors
  end

  get '/directors/:director_id' do
    #/directors/7
    @director = Director.find(params[:director_id])
    erb :director
  end

end
