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
    @url_helpers.url_for @object.home.logo.variant(resize: '150x150')
  end

  attribute :guest do
    @object.guest.name
  end

  attribute :guest_logo do
    @url_helpers.url_for @object.guest.logo.variant(resize: '150x150')
  end
end