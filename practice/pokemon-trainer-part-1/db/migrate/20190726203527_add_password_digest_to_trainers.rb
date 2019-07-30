class AddPasswordDigestToTrainers < ActiveRecord::Migration[5.2]
  def change
    add_column :trainers, :password_digest, :string
  end
end
