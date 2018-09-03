class Image < ApplicationRecord
  mount_uploader :image, ImageUploader

  default_scope { order(created_at: :desc) }

  validates :image, :presence => true, file_size: { less_than_or_equal_to: 2024.kilobytes }
end
