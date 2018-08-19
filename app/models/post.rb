class Post < ApplicationRecord
  extend FriendlyId
  friendly_id :slug, use: :slugged

  has_one_attached :thumbnail

  scope :home_page, -> (limit){ where(published: true).order(created_at: :desc).limit(limit || 3)}
  scope :default_order, -> { where(published: true).order(created_at: :desc)}

  def other_posts
    Post.default_order.where.not(id: id).limit(6).sample(3)
  end
end
