module ApplicationHelper

  def post_status post
    return content_tag(:span, "Opublikowany",  class: 'published' ) if post.published
    content_tag(:span, "Szkic",  class: 'draft' )
  end
end
