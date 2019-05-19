class Admin::MatchesController < Admin::AdminController
  before_action :set_match, only: [:edit, :update]

  def index
    @matches = MatchType.first.matches.order(round: :asc)
  end


  def edit
  end


  def update
    if @match.update(match_params)
      render :ok
    else
      render :edit
    end
  end

  private

  def match_params
    params.require(:match).permit(:result)
  end

  def set_match
    @match = Match.find(params[:id])
  end
end
