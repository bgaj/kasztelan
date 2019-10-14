class Api::V1::MatchesController < ApplicationController
  include Response
  include ExceptionHandler

  before_action :set_match_type, only: [:current_season]

  def current_season
    render jsonapi: @match_type
  end

  def schedule
    team = Team.my_team
    season = find_season
    render jsonapi: season.matches.team_matches(team).includes(:home, :guest)
  end

  def next_match
    team = Team.my_team
    next_match = Match.team_matches(team).where(result: [nil, ""]).order(match_date: :asc).first
    render jsonapi: next_match
  end

  def prev_match
    team = Team.my_team
    prev_match = Match.team_matches(team).where.not(result: [nil, ""]).last
    render jsonapi: prev_match
  end

  private

  def find_season
    Season.allowed_matches.find_by!(slug: params[:id])
  end

  def set_match_type
    @match_type = MatchType.find_by(full_name: 'II Liga Mężczyzn 2019/2020')
  end

end
