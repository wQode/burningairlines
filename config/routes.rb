Rails.application.routes.draw do


  resources :users, :airplanes


  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'
  end