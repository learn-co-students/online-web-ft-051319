class RemoveHpFromPokemon < ActiveRecord::Migration[5.2]
  def change
    remove_column :pokemons, :hp
  end
end
