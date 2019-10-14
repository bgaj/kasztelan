class Admin::PlayersController < Admin::AdminController

  before_action :set_player, only: [:edit, :update, :destroy,]

  def index
     @players = Season.current_season.players
  end

  def new
    @player = Player.new
  end

  def edit
  end

  def create
    @player = Player.new(player_params)
    @player.season = Season.current_season
    if @player.save
      redirect_to admin_players_path
    else
      render :new
    end
  end

  def update
    if @player.update(player_params)
      redirect_to edit_admin_player_path @player
    else
      render :edit
    end
  end

  def destroy
    if @player.destroy
      redirect_to admin_players_path
    else
      flash[:error]="Coś poszło nie tak"
    end
  end

  private

  def set_player
    @player = Player.find(params[:id])
  end

  def player_params
    params.require(:player).permit(:name, :number, :image_id, :position, :surname)
  end
end
