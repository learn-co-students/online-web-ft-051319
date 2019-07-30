class Pokemon < ApplicationRecord
  has_many :captures
  has_many :pokemon, through: :captures
end
