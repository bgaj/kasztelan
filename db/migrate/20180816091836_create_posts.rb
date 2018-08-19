class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :slug
      t.string :title
      t.string :lead
      t.string :meta_description
      t.text :content
      t.boolean :published
      t.timestamps
    end
  end
end
