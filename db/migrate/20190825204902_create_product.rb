class CreateProduct < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name
      t.string :description
      t.float :price
      t.string :url
      t.integer :order
      t.belongs_to :leading_image
      t.belongs_to :second_image
    end

    create_table :seasons do |t|
      t.string :name
      t.string :slug
      t.string :allow_players
      t.string :allow_matches
    end

    add_reference :players, :season, index: true
    add_reference :match_types, :season, index: true
  end
end
