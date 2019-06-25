class ApplicationController < Sinatra::Base

  configure do
    set :views, 'app/views'
  end

  get '/' do
    erb :home
  end

  get '/sayhellotochris' do
    erb :hichris
  end

end
