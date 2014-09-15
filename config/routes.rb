Rails.application.routes.draw do
  devise_for :users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  namespace :api, defaults: { format: 'json' } do
    resources :stories, only: [:index, :create, :show]
  end

  constraints user_agent: /(facebookexternalhit|Twitterbot)/ do
    get "stories/:id" => "crawlers#story"
  end

  root "application#index"
  get '*path' => 'application#index'
end
