class CreateMovies < ActiveRecord::Migration[5.2]
  #look up the difference between change and up and down
  def change
    create_table :movies do |t|
      t.string :title
      t.string :description
      t.integer :gross
    end
  end
end
