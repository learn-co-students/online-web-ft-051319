Rails.application.routes.draw do
  resources :sightings
  resources :locations
  resources :birds
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
