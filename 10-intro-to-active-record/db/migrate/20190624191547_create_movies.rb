class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    #create the movies table with a name as a string and a releae year as an intgeger
    create_table :movies do |t|
      t.string :name
      t.integer :year
    end

  end
end
