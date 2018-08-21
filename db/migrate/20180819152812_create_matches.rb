class CreateMatches < ActiveRecord::Migration[5.2]
  def change
    create_table :matches do |t|
      t.date :match_date
      t.time :match_time
      t.string :result
      t.references :home, foreign_key: {to_table: :teams}
      t.references :guest, foreign_key: {to_table: :teams}
      t.belongs_to :match_type
      t.integer :round
      t.timestamps
    end
  end
end
