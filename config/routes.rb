Rails.application.routes.draw do
  resources :issues

  resources :positions

  resources :candidates

  get '/' => 'home#index'

  get '/home/index'

  get '/home/about'

  get '/home/grid' => 'positions#index'

  get '/home/about' => 'home#about'  #Links from the Grid page to the About page.

  get '/home/submit' => 'issues#new'

  get '/home/staff'

  root 'home#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end