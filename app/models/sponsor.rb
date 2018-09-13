class Sponsor < ApplicationRecord
  default_scope { order(:position => :asc) }
  belongs_to :image

  # validates :link, presence: true
end
