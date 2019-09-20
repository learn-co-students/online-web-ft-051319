import React from 'react'

const Pokemon = (props) => {
  return (
    <div className="pokemon-div" id="charmander">
      <div>{props.name}</div>
      <img src={props.image}/>
    </div>
  )
}

export default Pokemon
