class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.string :name
      t.string :surname
      t.integer :number
      t.belongs_to :image
      t.integer :order
      t.integer :position
      t.timestamps
    end
  end
end
