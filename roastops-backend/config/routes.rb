Rails.application.routes.draw do
  post "/login", to: "auth#login"
  post "/register", to: "auth#register"
  post '/register', to: 'users#create'
end
