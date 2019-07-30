Rails.application.routes.draw do
  resources :categories do
      resources :posts, only: [:index, :show, :new, :create]
    end
  resources :posts, only: [:index, :show, :new, :create]
end
# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
