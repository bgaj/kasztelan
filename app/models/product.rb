class Product < ApplicationRecord
  belongs_to :leading_image, class_name: 'Image', foreign_key: :leading_image_id, optional: true
  belongs_to :second_image, class_name: 'Image', foreign_key: :second_image_id, optional: true
end
