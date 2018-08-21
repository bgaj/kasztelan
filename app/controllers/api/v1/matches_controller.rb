class Api::V1::MatchesController < ApplicationController
  include Response
  include ExceptionHandler

  before_action :set_match_type, only: [:current_season]

  def current_season
    render jsonapi: @match_type
  end

  def schedule
    team = Team.my_team
    render jsonapi: Match.team_matches(team).includes(:home, :guest)
  end

  private

  def set_match_type
    @match_type = MatchType.find_by(full_name: 'II Liga Mężczyzn 2018/2019')
  end

end