class Sponsor < ApplicationRecord
  belongs_to :image

  # validates :link, presence: true
end
