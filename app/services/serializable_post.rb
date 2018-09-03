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
   @object.image.image_url if @object.image
  end

  attribute :image_small do
    @object.image.image.thumb.url if @object.image
  end
end