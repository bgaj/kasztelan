Rails.application.routes.draw do
  default_url_options :only_path => true
  root to: 'home#index'
  namespace :api do
    namespace :v1 do
      resources :sponsors, path: 'partnerzy', only: [ :index]
      resources :players, path: 'zawodnicy', only: [ :index]
      resources :posts, only: [:show, :index] do
        collection do
          get :home
        end
      end
      post :contact_form, to: 'contact_form#create'
      get :current_season, to: 'matches#current_season'
      get :schedule, to: 'matches#schedule'
      get :next_match, to: 'matches#next_match'
      get :prev_match, to: 'matches#prev_match'
    end
  end

  devise_for :users, path: 'admin', controllers: { sessions: 'admin/sessions' }

  namespace :admin do
    root to: 'posts#index', as: :root
    resources :matches, expcept: [:new, :show, :destroy]
    resources :players, expcept: [:show]
    resources :sponsors, except: [:show], path: 'partnerzy' do
      collection do
        patch :sort
      end
    end
    resources :posts, except: [:show] do
      member do
        get :top_post
      end
    end
    resources :images
  end

  get 'aktualnosci/:id', to: 'home#news'
  get '*path', to: 'home#index', format: false, constraints: lambda { |request| !(request.path =~ /rails/) }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
