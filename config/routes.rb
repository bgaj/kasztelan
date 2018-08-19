Rails.application.routes.draw do
  default_url_options :only_path => true
  root to: 'home#index'
  namespace :api do
    namespace :v1 do
      resources :posts, only: [:show, :index] do
        collection do
          get :home
        end
      end
    end
  end
  get '*path', to: 'home#index', format: false, constraints: lambda { |request| !(request.path =~ /rails/) }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
