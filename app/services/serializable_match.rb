class SerializableMatch < JSONAPI::Serializable::Resource

  type 'match'
  attributes :match_date, :match_time, :result

  attribute :match_type do
    @object.match_type.name
  end

  attribute :home do
    @object.home.name
  end

  attribute :home_logo do
    @object.home.image.image.small_thumb.url
  end

  attribute :guest do
    @object.guest.name
  end

  attribute :guest_logo do
    @object.guest.image.image.small_thumb.url
  end
end