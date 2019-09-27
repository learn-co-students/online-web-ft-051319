import React from 'react'

const Header = (props) =>{
  console.log(props);
  return (
    <div id="header">
      <input onKeyDown={props.updateSearch} id="search-input" type="text"/>
    </div>
  )
}

export default Header
