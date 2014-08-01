Rails.application.routes.draw do

  root :to => 'pages#index'

  resources :users, :airplanes, :flights, :reservations

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  delete '/login' => 'sessions#destroy'
end

# \         root GET    /                                pages#index
#            users GET    /users(.:format)                 users#index
#                  POST   /users(.:format)                 users#create
#         new_user GET    /users/new(.:format)             users#new
#        edit_user GET    /users/:id/edit(.:format)        users#edit
#             user GET    /users/:id(.:format)             users#show
#                  PATCH  /users/:id(.:format)             users#update
#                  PUT    /users/:id(.:format)             users#update
#                  DELETE /users/:id(.:format)             users#destroy
#        airplanes GET    /airplanes(.:format)             airplanes#index
#                  POST   /airplanes(.:format)             airplanes#create
#     new_airplane GET    /airplanes/new(.:format)         airplanes#new
#    edit_airplane GET    /airplanes/:id/edit(.:format)    airplanes#edit
#         airplane GET    /airplanes/:id(.:format)         airplanes#show
#                  PATCH  /airplanes/:id(.:format)         airplanes#update
#                  PUT    /airplanes/:id(.:format)         airplanes#update
#                  DELETE /airplanes/:id(.:format)         airplanes#destroy
#          flights GET    /flights(.:format)               flights#index
#                  POST   /flights(.:format)               flights#create
#       new_flight GET    /flights/new(.:format)           flights#new
#      edit_flight GET    /flights/:id/edit(.:format)      flights#edit
#           flight GET    /flights/:id(.:format)           flights#show
#                  PATCH  /flights/:id(.:format)           flights#update
#                  PUT    /flights/:id(.:format)           flights#update
#                  DELETE /flights/:id(.:format)           flights#destroy
#     reservations GET    /reservations(.:format)          reservations#index
#                  POST   /reservations(.:format)          reservations#create
#  new_reservation GET    /reservations/new(.:format)      reservations#new
# edit_reservation GET    /reservations/:id/edit(.:format) reservations#edit
#      reservation GET    /reservations/:id(.:format)      reservations#show
#                  PATCH  /reservations/:id(.:format)      reservations#update
#                  PUT    /reservations/:id(.:format)      reservations#update
#                  DELETE /reservations/:id(.:format)      reservations#destroy
#            login GET    /login(.:format)                 sessions#new
#                  POST   /login(.:format)                 sessions#create
#                  DELETE /login(.:format)                 sessions#destroy
