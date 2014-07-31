Rails.application.routes.draw do


  resources :users, :airplanes


  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  delete '/login' => 'sessions#destroy'
end
