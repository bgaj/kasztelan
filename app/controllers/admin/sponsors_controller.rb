class Admin::SponsorsController < Admin::AdminController

  before_action :set_image, only: [:edit, :update, :destroy, :autosave]

  def index
    @sponsors = Sponsor.all
  end

  def sort
    params[:sponsor].each_with_index do |id, index|
      Sponsor.where(id: id).update_all(position: index + 1)
    end
    render json: :ok
  end

  def new
    @sponsor = Sponsor.new
  end

  def create
    @sponsor = Sponsor.new(sponsor_params)
    if @sponsor.save
      redirect_to admin_sponsors_path
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @sponsor.update(sponsor_params)
      redirect_to edit_admin_sponsor_path @sponsor
    else
      render :edit
    end
  end

  def destroy
    if @sponsor.destroy
      redirect_to admin_sponsors_path
    else
      flash[:error]="Coś poszło nie tak"
    end
  end

  private

  def sponsor_params
    params.require(:sponsor).permit(:image_id, :link)
  end

  def set_image
    @sponsor = Sponsor.find(params[:id])
  end

end
