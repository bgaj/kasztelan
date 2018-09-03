class HomeController < ApplicationController
  def index
  end

  def news
    @post = Post.published.find_by(slug: params[:id])
  end
end
