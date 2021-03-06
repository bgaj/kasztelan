class SerializableSponsor < JSONAPI::Serializable::Resource

  type 'sponsors'
  attributes :link, :main

  attribute :image do
   @object.image.image.large.url if @object.image
  end

  attribute :image_small do
    @object.image.image.thumb.url if @object.image
  end
end