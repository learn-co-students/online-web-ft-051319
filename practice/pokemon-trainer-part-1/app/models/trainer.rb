class Trainer < ApplicationRecord
  has_many :captures
  has_many :pokemons, through: :captures
  accepts_nested_attributes_for :captures
  has_secure_password
end
