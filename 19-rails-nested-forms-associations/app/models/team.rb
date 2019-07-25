class Team < ApplicationRecord
  has_many :players
  accepts_nested_attributes_for :players

  #accepts_nested_attributes_for :players is doing this:
  #accepts a hash: of attributes to make players out of
  #def players_attributes=(players_hash)
    #players hash probably looks like this:
    #players_hash = {
    # 0: {name: "Some name"},
    # 1: {name: "Another name"}
    #}
    #players_array.each do |player_number, player_hash|
    # new_player = Player.create(player_hash)
    # player.team = self
    #end
  # end
end
