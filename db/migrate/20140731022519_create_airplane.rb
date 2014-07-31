class CreateAirplane < ActiveRecord::Migration
  def change
    create_table :airplanes do |t|
      t.string :name
      t.string :rows
      t.string :colums
      t.timestamps
    end
  end
end
