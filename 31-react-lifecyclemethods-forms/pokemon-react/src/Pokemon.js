import React, { Component } from 'react'

//functional component
//presentational components
// const Pokemon = (props) => {
//   console.log(props);
//   return (
//     <div className="pokemon-div">
//       <div>{props.name}</div>
//       <img src={props.front}/>
//     </div>
//   )
// }

//class syntax React Component
//AKA Smart Components
class Pokemon extends Component {

  state = {forward: true}

  flipPokemon = () => {
    //setState accepts an object OR a callback function that returns a new object
    //the callback function is automatically passed a keyword called prevState
    //that holds the previous state of the application
    //ensuring a type of synchronous stability
    //so if you are changing your state BASED ON what THE previous version of the state is
    //you should DEFINITELy use the prevState keyword
    //this includes flipping from true to false, incrementing/drecrementing/any arithmetic really
    this.setState(prevState => {
      return {
        forward: !prevState.forward
      }
    })
  }

  render(){

    return(
      <div className="pokemon-div">
        <div>{this.props.name}</div>
        <img onClick={this.flipPokemon} src={this.state.forward ? this.props.front : this.props.back}/>
      </div>
    )
  }
}



export default Pokemon
