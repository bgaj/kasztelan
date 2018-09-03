class AddImageReferenceToPost < ActiveRecord::Migration[5.2]
  def change
    add_reference :posts, :image, index: true
  end
end
