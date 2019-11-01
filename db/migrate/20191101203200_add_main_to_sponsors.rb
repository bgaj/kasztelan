class AddMainToSponsors < ActiveRecord::Migration[5.2]
  def change
    add_column :sponsors, :main, :boolean, default: false
  end
end
