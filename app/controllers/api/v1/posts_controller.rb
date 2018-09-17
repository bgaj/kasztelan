class Api::V1::PostsController < ApplicationController
  include Response
  include ExceptionHandler

  before_action :set_post, only: [:show]

  def index
    posts = Post.page(params[:page]).per(5).published.top_post_order.ordered.includes(:image)
    render jsonapi: posts, links: pagination(posts)
  end

  def home
    posts = Post.home_page(params[:total])
    render jsonapi: posts
  end

  def show
    render jsonapi: @post, class: jsonapi_class.merge(Post: SinglePost)
  end

  private

  def set_post
    if params[:uuid]
      @post = Post.find(params[:id])
      json_response({ message: 'not_found' }, :not_found) if @post.uuid != params[:uuid]
    else
      @post = Post.published.friendly.find(params[:id])
      impressionist(@post)
    end
  end

  def pagination(t)
    {total_count: t.total_count, total_pages: t.total_pages, current_page: t.current_page}
  end
end