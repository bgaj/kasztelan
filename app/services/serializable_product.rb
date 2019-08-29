class SerializableProduct < JSONAPI::Serializable::Resource

  type 'product'
  attributes :name, :url, :price, :description

  attribute :leading_image do
   @object.leading_image.image.large.url if @object.leading_image
  end

  attribute :second_image do
    @object.second_image.image.large.url if @object.second_image
  end
end