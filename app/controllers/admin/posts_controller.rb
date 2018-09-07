class Admin::PostsController < Admin::AdminController

  before_action :set_post, only: [:edit, :update, :destroy, :autosave, :top_post]

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

  def top_post
    Post.all.update_all(top_post: false)
    @post.top_post = !@post.top_post
    if @post.save
      redirect_to admin_posts_path
    end

  end

  def update
    if @post.update(post_params)
      redirect_to edit_admin_post_path @post
    else
      render :edit
    end
  end

  def destroy
    if @post.destroy
      redirect_to admin_posts_path
    else
      flash[:error]="Coś poszło nie tak"
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
