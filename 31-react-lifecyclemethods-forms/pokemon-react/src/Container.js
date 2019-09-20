import React, { Component } from 'react'

import Pokemon from './Pokemon.js'
import Form from './Form.js'

const pokeUrl = "http://localhost:3000/pokemon"

class Container extends Component{

  state = {
    loaded: false,
    pokemon: []
  }

  componentDidMount(){
    fetch(pokeUrl)
    .then(res => res.json())
    .then(res => {
      this.setState({pokemon: res, loaded: true})
    })
  }

  submitNewPokemon = (pokeInfo) => {

    let pokeObj = {
      name: pokeInfo.name,
      sprites: {
        front: pokeInfo.frontImg,
        back: pokeInfo.backImg
      }
    }

    fetch(pokeUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(pokeObj)
    })

    this.setState(prevState => {
      return {...prevState, pokemon: [...prevState.pokemon, pokeObj]}
    })
  }



  renderPokemon(){
    let filteredPokemon = this.filterPokemon()

    if (filteredPokemon.length > 0){
      return filteredPokemon.map(pokeObj => {
        return <Pokemon id={pokeObj.id} name={pokeObj.name} front={pokeObj.sprites.front} back={pokeObj.sprites.back}/>
      })
    } else if (filteredPokemon.length === 0 && this.state.loaded){
      return <Form handleSubmit={this.submitNewPokemon}/>
    }
    else {
      return <div></div>
    }
  }

  filterPokemon(){
    return this.state.pokemon.filter(pokeObj => {
      return pokeObj.name.includes(this.props.search)
    })
  }

  render(){

    return (
      <div id="pokemon-container">
      {this.renderPokemon()}
      </div>
    )
  }
}

export default Container
