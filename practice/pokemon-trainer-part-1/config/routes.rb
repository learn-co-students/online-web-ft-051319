Rails.application.routes.draw do
  # resources :captures
  resources :trainers, only: [:index, :show]
  resources :pokemons, only: [:index, :show]

  get 'signup', to: 'sessions#signup', as: "signup"
  post 'signup', to: 'sessions#create_user', as: "create_user"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
