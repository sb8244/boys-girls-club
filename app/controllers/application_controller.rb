class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
  end

  def authenticate_admin_user!
    abort "X"
    raise SecurityError unless current_user.try(:admin?)
  end
end
