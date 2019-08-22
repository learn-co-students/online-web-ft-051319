class BirdsController < ApplicationController

  def index
    birds = Bird.all
    render json: birds
  end

  def create
    bird = Bird.create(bird_params)
    render json: bird
  end

  def update
    byebug
  end


  private

  def bird_params
    params.require(:bird).permit(:name, :species)
  end

end
