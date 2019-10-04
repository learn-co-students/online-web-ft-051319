import React from 'react';
import {Provider} from 'react-redux'

import SearchBar from './SearchBar'
import BookContainer from './BookContainer'

import store from './redux/store'

import './App.css'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SearchBar/>
        <BookContainer/>
      </div>
    </Provider>
  );
}

export default App;
