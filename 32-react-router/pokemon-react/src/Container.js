import React from 'react'

import Pokemon from './Pokemon.js'
import pokeArray from './pokedata.js'

const Container = (props) => {

  function renderPokemon(){
    return filterPokemon().map(pokeObj => {
      return <Pokemon id={pokeObj.id} name={pokeObj.name} front={pokeObj.sprites.front} back={pokeObj.sprites.back}/>
    })
  }

  function filterPokemon(){
    return pokeArray.filter(pokeObj => {
      return pokeObj.name.includes(props.search)
    })
  }

  return (
    <div id="pokemon-container">
      {renderPokemon()}
    </div>
  )
}

export default Container
