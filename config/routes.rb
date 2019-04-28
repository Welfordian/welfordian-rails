Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    root to: 'index#show'
    get '/contact', to: 'contact#show'
    post '/contact', to: 'contact#create'
    get '/login', to: 'auth#showLogin'
    get '/:slug', to: 'posts#show'
    get '*unmatched_route', to: 'application#not_found'
end
