class SinglePost < JSONAPI::Serializable::Resource
  
  type 'post'
  id { @object.slug }
  attributes :title, :content, :slug, :lead, :meta_description

  attribute :date do
    @object.created_at
  end

  attribute :image do
    @object.image.image_url if @object.image
  end

  attribute :other_posts do
    renderer = JSONAPI::Serializable::Renderer.new
    posts = @object.other_posts
    renderer.render(
        posts,
        class: { Post: SerializablePost },
        expose: { url_helpers:Rails.application.routes.url_helpers },
    )
  end

end