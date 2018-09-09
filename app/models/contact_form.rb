class ContactForm
  include ActiveModel::Model
  include Virtus.model
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  attribute :email, String
  attribute :subject, String
  attribute :message, String

  validates :email, presence: true, format: { with: VALID_EMAIL_REGEX }
  validates :message, presence: true

end