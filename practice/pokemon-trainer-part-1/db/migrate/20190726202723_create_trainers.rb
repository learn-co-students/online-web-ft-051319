class CreateTrainers < ActiveRecord::Migration[5.2]
  def change
    create_table :trainers do |t|
      t.string :name
      t.integer :age
      t.string :location
      t.string :level

      t.timestamps
    end
  end
end
