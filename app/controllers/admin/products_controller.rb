class Admin::ProductsController < Admin::AdminController

  before_action :set_product, only: [:edit, :update, :destroy]

  def index
    @products = Product.page(params[:page]).per(15)
  end

  def new
    @product = Product.new
  end

  def edit
  end

  def create
    @product = Product.new(product_params)
    if @product.save
      redirect_to admin_products_path
    else
      render :new
    end
  end

  def update
    if @product.update(product_params)
      redirect_to edit_admin_product_path @product
    else
      render :edit
    end
  end

  def destroy
    if @product.destroy
      redirect_to admin_products_path
    else
      flash[:error]="Coś poszło nie tak"
    end
  end

  private

  def set_product
    @product = Product.find(params[:id])
  end

  def product_params
    params.require(:product).permit(:name, :description, :price, :url, :order, :leading_image_id, :second_image_id)
  end
end
