source 'https://rubygems.org'

# ruby
ruby '2.1.2'

# rails
gem 'rails', '4.1.1'

gem 'dotenv-rails'

gem "active_model_serializers"
gem "paperclip", "~> 4.2"
gem 'aws-sdk'
gem 'newrelic_rpm'

# front end
gem 'sass-rails', '~> 4.0.3'
gem 'uglifier', '>= 1.3.0'
gem 'jquery-rails'
gem 'slim-rails'

# user
gem 'devise'

# admin
gem 'activeadmin', github: 'activeadmin'
gem 'active_admin_editor'

group :development do
  gem 'spring-commands-rspec'
end

group :development, :test do
  gem 'factory_girl_rails'
  gem 'faker'
  gem 'rspec-rails', '~> 3.0.0'
  # db
  gem 'sqlite3'
end

group :production do
  gem 'pg'
  gem 'rails_12factor'
end
