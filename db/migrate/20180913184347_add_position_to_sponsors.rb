class AddPositionToSponsors < ActiveRecord::Migration[5.2]
  def change
    add_column :sponsors, :position, :integer
  end
end
