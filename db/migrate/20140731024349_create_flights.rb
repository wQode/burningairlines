class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.string :name
      t.string :origin
      t.string :destination
      t.string :date
      t.integer :airplane_id

      t.timestamps
    end
  end
end
