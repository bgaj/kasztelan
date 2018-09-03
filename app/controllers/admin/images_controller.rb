class Admin::ImagesController < Admin::AdminController

  before_action :set_image, only: [:edit, :update, :destroy, :autosave]

  def index
    @images = Image.all
    render :json=> @images.as_json, layout: false
  end

  def new
    @image = Image.new
  end

  def create
    @image = Image.new(image_params)
    if @image.save
      render :json=> @image
    else
      render status: 400, :json=>@image.errors
    end
  end

  def edit
  end

  private

  def image_params
    params.require(:image).permit(:image)
  end

  def set_image
    @image = Image.find(params[:id])
  end

end
