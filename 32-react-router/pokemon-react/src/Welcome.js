import React from 'react'

const Welcome = (props) => {
  return (
    <div id="welcome">
      <h1> Welcome to the Pokemon Search Application, {props.name}!</h1>
    </div>
  )
}

export default Welcome
