class Api::V1::PlayersController < ApplicationController
  include Response
  include ExceptionHandler

  def index
    players = Player.all.number_order
    render jsonapi: players
  end

end