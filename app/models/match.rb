class Match < ApplicationRecord
  belongs_to :home, class_name: 'Team'
  belongs_to :guest, class_name: 'Team'
  belongs_to :match_type

  scope :team_matches, -> (team){ where(home_id: team.id).or(where(guest_id: team.id)).order(match_date: :asc)}
end
