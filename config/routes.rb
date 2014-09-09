Rails.application.routes.draw do

  namespace :api, defaults: { format: 'json' } do
    resources :stories, only: [:index, :create, :show]
  end

  root "application#index"
  get '*path' => 'application#index'
end
