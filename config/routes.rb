Rails.application.routes.draw do

  root :to => 'pages#index'

  resources :users, :airplanes, :flights, :reservations

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  delete '/login' => 'sessions#destroy'
end
