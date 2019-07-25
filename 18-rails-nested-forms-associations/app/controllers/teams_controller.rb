class TeamsController < ApplicationController

  def index
    @teams = Team.all
  end

  def show
    @team = Team.find(params[:id])
  end

  def new
    # byebug
    @team = Team.new
    params[:forms].to_i.times do
      @team.players.build
    end
    #the instance held in the @team variable now has two empty Player instances associated with it, and our form will be able to see them by calling @team.players and rendering the correct amount of form fields
    # byebug
  end

  def create
    @team = Team.create(team_params)
    # byebug
    redirect_to @team
  end

  private

  def team_params
    params.require(:team).permit(:name, :mascot, players_attributes: [:name])
  end

end
