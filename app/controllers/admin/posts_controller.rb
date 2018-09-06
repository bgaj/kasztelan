class Admin::PostsController < Admin::AdminController

  before_action :set_post, only: [:edit, :update, :destroy, :autosave]

  def index
    @posts = Post.page(params[:page]).per(15).ordered
  end

  def new
    @post = Post.new
  end

  def edit
  end

  def create
    @post = Post.new(post_params)
    @post.published = false
    @post.uuid = SecureRandom.uuid
    if @post.save
      redirect_to admin_posts_path
    else
      render :new
    end
  end

  def update
    if @post.update(post_params)
      redirect_to admin_posts_path
    else
      render :edit
    end
  end

  private

  def set_post
    @post = Post.friendly.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :slug, :image_id, :meta_description, :content, :published)
  end
end
