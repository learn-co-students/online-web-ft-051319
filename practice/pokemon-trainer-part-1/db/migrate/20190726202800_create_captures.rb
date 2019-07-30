class CreateCaptures < ActiveRecord::Migration[5.2]
  def change
    create_table :captures do |t|
      t.references :pokemon
      t.references :trainer
      t.string :name
      t.integer :hp

      t.timestamps
    end
  end
end
