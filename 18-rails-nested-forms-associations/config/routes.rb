Rails.application.routes.draw do
  resources :players, only: [:index, :new, :create]
  resources :teams, only: [:index, :show, :new, :create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
