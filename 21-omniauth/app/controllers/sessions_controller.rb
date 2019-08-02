class SessionsController < ApplicationController

  def home
  end

  def create
    @person = {name: auth['name'], location: auth['location'], image: auth['avatar_url']}
    render :logged_in
  end

  private

  def auth
    request.env['omniauth.auth']['extra']['raw_info']
  end
  #could we make strong params with this hash? 

end
