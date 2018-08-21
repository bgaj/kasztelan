class Team < ApplicationRecord
  has_one_attached :logo

  def self.my_team
    where(my_team: true).first
  end
end
