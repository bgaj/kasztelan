class Image < ApplicationRecord
  mount_uploader :image, ImageUploader

  default_scope { order(created_at: :desc) }

  validates :image, :presence => true
end
