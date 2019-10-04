import React, { Component } from 'react'
import { connect } from 'react-redux'

import updateBooks from './redux/actionCreators'

class SearchBar extends Component {

  state = {search: ''}

  updateSearch = (event) => {
    this.setState({search: event.target.value})
  }

  //any asynchronous functionality that is being described in the component should only relate
  //to this component's local state
  //the function we wrote below connects the component to the REDUX STORE'S state
  //therefore we are kind of betraying a pattern and not separating out responsibility as neatly
  //although our app works perfectly fine now, the best pattern is to use a THUNK
  // handleSearch = () => {
  //   fetch("https://www.googleapis.com/books/v1/volumes?q=" + this.state.search)
  //     .then(res => res.json())
  //     .then((res) => this.props.updateBooks(res.items))
  // }

  render(){
    return(
      <div>
        <h3>Search For Book:</h3>
        <input onChange={this.updateSearch} value={this.state.search}type="text"/>
        <br/>
        <br/>
        <button onClick={() => this.props.updateBooks(this.state.search)}>Find Books!</button>
      </div>
    )
  }
}

export default connect(null, {updateBooks})(SearchBar)
