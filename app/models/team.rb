class Team < ApplicationRecord
  belongs_to :image

  def self.my_team
    where(my_team: true).first
  end
end
