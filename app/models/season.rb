class Season < ApplicationRecord
  has_many :players
  has_many :match_types
  has_many :matches, through: :match_types

  scope :allowed_players, -> { where(allow_players: true)}
  scope :allowed_matches, -> { where(allow_matches: true)}

  def self.current_season
    last
  end
end
