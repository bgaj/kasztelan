class CreateMatchTypes < ActiveRecord::Migration[5.2]
  def change
    create_table :match_types do |t|
      t.string :name
      t.string :full_name

      t.timestamps
    end
  end
end
