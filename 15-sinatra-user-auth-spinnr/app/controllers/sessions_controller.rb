class SessionsController < ApplicationController

  get '/signup' do
    erb :'sessions/signup'
  end

  get '/login' do
    erb :'sessions/login'
  end

  post '/login' do
    user = User.find_by(username: params[:user][:username])
    authenticated = user.authenticate(params[:user][:password])
    if authenticated
      session[:user_id] = authenticated.id
      redirect '/'
    else
      redirect '/login'
    end
  end

  post '/signup' do
    user = User.create(params[:user])
    session[:user_id] = user.id
    redirect '/'
  end

  get '/logout' do
    session[:user_id] = nil
    redirect '/'
  end

end
