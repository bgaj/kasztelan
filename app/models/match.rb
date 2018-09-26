class Match < ApplicationRecord
  RESULT_REGEXP = /\A(\d+:\d+)+(,\d+:\d+)*/
  belongs_to :home, class_name: 'Team'
  belongs_to :guest, class_name: 'Team'
  belongs_to :match_type

  scope :team_matches, -> (team){ where(home_id: team.id).or(where(guest_id: team.id)).order(match_date: :asc)}

  validates :result, allow_blank: true, format: { with: RESULT_REGEXP }

end
