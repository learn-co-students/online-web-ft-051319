Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/auth/github/callback', to: 'sessions#create'

  root 'sessions#home'
end
