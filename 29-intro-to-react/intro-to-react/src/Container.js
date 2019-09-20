import React from 'react'

import Pokemon from './Pokemon'

const pokemonToRender = [
  {
    name: "Charmander",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
  },
  {
    name: "Charmeleon",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
  },
  {
    name: "Charizard",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"}
]

function renderPokemon(){
  return pokemonToRender.map(pokemon =>{
    return <Pokemon name={pokemon.name} image={pokemon.image} />
  })
}

const Container = () => {
  return (
    <div id="pokemon-contianer">
      {renderPokemon()}
    </div>
  )
}

export default Container
