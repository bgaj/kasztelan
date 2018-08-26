class Admin::PostsController < Admin::AdminController

  before_action :set_post, only: [:edit, :update, :destroy, :autosave]

  def index

  end

  def new
  end

  def edit
  end


end
