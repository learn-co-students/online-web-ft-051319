Rails.application.routes.draw do
  resources :teachers
  resources :students
  resources :school_classes, only: [:new, :create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
