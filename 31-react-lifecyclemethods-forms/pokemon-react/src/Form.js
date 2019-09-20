import React, { Component } from 'react'

class Form extends Component {

  state = {name: "", frontImg: "", backImg: ""}

  handleInput = (event) => {
    let key = event.target.name
    let value = event.target.value

    this.setState(prevState => {
      return {...prevState, [`${key}`]: value}
    }, () => console.log(this.state))
  }

  render(){
    return (
      <div className="pokemon-div">
        <label>Name:</label><br/>
        <input type="text" name="name" onChange={this.handleInput} value={this.state.name}/><br/>
        <label>Front URL:</label><br/>
        <input type="text" name="frontImg" onChange={this.handleInput} value={this.state.frontImg}/><br/>
        <label>Back URL:</label><br/>
        <input type="text" name="backImg" onChange={this.handleInput} value={this.state.backImg}/><br/>
        <input type="submit" onClick={() => this.props.handleSubmit(this.state)}/>
      </div>
    )
  }
}

export default Form
