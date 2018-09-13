class Admin::SessionsController < Devise::SessionsController
  include ApplicationHelper
  layout 'login'
end