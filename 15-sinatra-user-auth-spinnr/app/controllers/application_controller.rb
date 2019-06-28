require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    enable :sessions
    set :session_secret, 'flatiron' 
  end

  get '/' do
    current_user
    erb :welcome
  end

  helpers do
    def current_user
      if session[:user_id]
        @user = User.find(session[:user_id])
      else
        nil
      end
    end
  end

end
