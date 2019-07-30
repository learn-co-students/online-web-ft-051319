class CreateSchoolClasses < ActiveRecord::Migration[5.2]
  def change
    create_table :school_classes do |t|
      t.references :student, foreign_key: true
      t.references :teacher, foreign_key: true
      t.string :subject
      t.integer :hour

      t.timestamps
    end
  end
end
