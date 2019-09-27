import React from 'react'
import pokeArray from './pokedata.js'

const PokemonShow = (props) => {

  let pokemon = pokeArray.find(poke => poke.name === props.match.params.name)
  console.log(pokemon);

  function renderPokemon(){
    if (pokemon){
      return (
        <div id="pokemon-show-container">
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites.front} />
          <ul>
            <li>Weight: {pokemon.weight}</li>
            <li>Height: {pokemon.height}</li>
            <li>Types: {pokemon.types.join(", ")}</li>
          </ul>
        </div>
      )
    } else {
      return (
        <div>
          "Didn't find that one!"
        </div>
      )
    }
  }

  return renderPokemon()
  
}

export default PokemonShow
