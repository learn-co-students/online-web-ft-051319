class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.string :body
      t.integer :user_id
      t.boolean :private
      t.timestamps null: false
    end
  end
end
