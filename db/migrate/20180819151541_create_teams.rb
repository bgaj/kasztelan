class CreateTeams < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.string :name
      t.belongs_to :image
      t.boolean :my_team, default: false
      t.timestamps
    end
  end
end
