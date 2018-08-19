class SerializablePost < JSONAPI::Serializable::Resource

  type 'posts'
  id { @object.slug }
  attributes :title, :content, :slug, :lead, :meta_description

  attribute :content do
    ActionController::Base.helpers.strip_tags(@object.content).truncate(150)
  end

  attribute :date do
    @object.created_at
  end

  attribute :image do
    @url_helpers.url_for @object.thumbnail.variant(resize: '800x800') if @object.thumbnail.attached?
  end

  attribute :image_small do
    @url_helpers.url_for @object.thumbnail.variant(resize: '200x200') if @object.thumbnail.attached?
  end
end