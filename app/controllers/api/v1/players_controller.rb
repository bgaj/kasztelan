class Api::V1::PlayersController < ApplicationController
  include Response
  include ExceptionHandler

  def show
    season = find_season
    players = season.players.number_order
    render jsonapi: players
  end

  private

  def find_season
    Season.allowed_players.find_by!(slug: params[:id])
  end
end