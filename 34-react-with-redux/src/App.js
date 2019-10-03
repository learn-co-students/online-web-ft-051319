import React from 'react';
import './App.css';

import ButtonContainer from './ButtonContainer.js'
import Total from './Total'

function App() {

  return (
    <div className="App">
      <ButtonContainer/>
      {/*DOES BUTTON CONTAINER DISPATCH ANY ACTIONS TO THE STORE? YES. NEEDS CONNECT*/}
      <Total/>
      {/*DOES TOTAL NEED INFO FROM THE STORE*/}
    </div>
  );
}

export default App;

//ONLY COMPONENTS THAT NEED ACCESS TO THE STORE SHOULD USE THE CONNECT FUNCTION

//DOES APP NEEDS INFO FROM THE STORE'S STATE? NO. IS IT DISPATCHING ANY ACTIONS? NO. NO NEED FOR CONNECT.
