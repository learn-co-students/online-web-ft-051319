import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';

import SearchContainer from './SearchContainer'
import PokemonShow from './PokemonShow'
import Welcome from './Welcome.js'


class App extends Component {

  render(){
    return (
      <div id="app">
        <Router>
          <Link to="/pokemon">
            <img alt="pokemon logo" id="logo" src="https://learn-co-curriculum.github.io/js-pokemon-search-practice-assignment/images/pokemon.png"/>
          </Link>
          {/* Whatever goes :here is in match.parans */}
          <Route path="/pokemon/:name" component={PokemonShow} />
          <Route exact path="/pokemon" component={SearchContainer}/>
          {/* Render components with props like this: */}
          <Route exact path="/" render={() => <Welcome name="Chris"/>} />
        </Router>
      </div>
    );
  }
}

export default App;
