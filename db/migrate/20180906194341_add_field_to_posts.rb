class AddFieldToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :top_post, :boolean
  end
end
