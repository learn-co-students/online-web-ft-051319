class SessionsController < ApplicationController

  def signup
    @trainer = Trainer.new
    @trainer.captures.build
    @starter_pokemon = Pokemon.where(name: ["Pikachu", "Bulbasaur", "Charizard"])
  end

  def create_user
    if @trainer = Trainer.create(signup_params)
      redirect_to @trainer
    else
      render :form
    end
  end

  private

  def signup_params
    params.require(:trainer).permit(:name, :location, :age, :level, :password, captures_attributes: [:pokemon_id, :name, :hp])
  end

end
