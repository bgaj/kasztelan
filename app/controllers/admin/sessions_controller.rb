class Admin::SessionsController < Devise::SessionsController
  include ApplicationHelper
  layout 'admin'
end