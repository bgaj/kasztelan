class Post < ApplicationRecord
  is_impressionable
  paginates_per 5
  extend FriendlyId
  friendly_id :slug_candidates, use: :slugged

  belongs_to :image, optional: true

  scope :ordered, -> { order(created_at: :desc)}
  scope :top_post_order, -> { order(top_post: :desc)}
  scope :home_page, -> (limit){ where(published: true).top_post_order.ordered.limit(limit || 3)}
  scope :published, -> { where(published: true)}

  validates :meta_description, length: { maximum: 255 }
  validates :title, length: { maximum: 255 }, presence: true
  validates :slug, uniqueness: true

  def slug_candidates
    [
        :title,
        [:title, :id],
    ]
  end

  def should_generate_new_friendly_id?
    new_record? || title_changed?
  end

  def other_posts
    Post.published.ordered.where.not(id: id).limit(6).sample(3)
  end
end
