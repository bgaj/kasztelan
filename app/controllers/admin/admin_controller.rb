class Admin::AdminController < ActionController::Base
  include ApplicationHelper
  layout 'admin'
  before_action :authenticate_user!
end
