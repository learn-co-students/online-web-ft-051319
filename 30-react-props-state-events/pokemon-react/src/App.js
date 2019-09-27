import React, { Component } from 'react';
import './App.css';

//Components
import Header from './Header'
import Container from './Container'

class App extends Component {

  state = {search: ''}

  updateSearch(event) {
    this.setState({search: event.target.value})
  }

  render(){
    return (
      <div id="app">
        {/*header child! you are responsible for gathering user input!*/}
        <Header updateSearch={this.updateSearch.bind(this)}/>
        {/* sibling components can never talk to each other
        //so whenever we have to handle logic between two Components
        //we need to utilize state in the parent component between the two

        //Container child! You are responsible for taking that input and
        //changing what the user sees!*/}
        <Container search={this.state.search}/>
      </div>
    );
  }
}

export default App;
