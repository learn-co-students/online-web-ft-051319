import React from 'react'

const Header = (props) =>{
  console.log(props);
  return (
    <div id="header">
      <img alt="pokemon logo" id="logo" src="https://learn-co-curriculum.github.io/js-pokemon-search-practice-assignment/images/pokemon.png"/>
      <input onChange={props.updateSearch} id="search-input" type="text"/>
    </div>
  )
}

export default Header
