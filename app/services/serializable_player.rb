class SerializablePlayer < JSONAPI::Serializable::Resource

  type 'players'
  attributes :name, :surname, :number, :position_name

  attribute :image do
   @object.image.image.large.url if @object.image
  end

  attribute :image_small do
    @object.image.image.thumb.url if @object.image
  end

  attribute :grid do
    if @object.season_id == 2
      6
    else
      4
    end
  end
end
