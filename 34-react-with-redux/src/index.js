import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store from './redux/store.js'

import { Provider } from 'react-redux'
//Provider is creating a context for our React application automatically.
//Look up the React Context API later, and understand how Redux is utilizing it

//REDUX DOES NOT TRUST YOU. IT NEVER WANTS YOU TO TOUCH THE STORE or THE STORE'S STATE DIRECTLTY
//WE CAN ONLY EVER CHANGE THE STATE OR VIEW THE STATE BY USING THE COMPONENTS/FUNCTIONS REDUX GIVES US
//NAMELY, PROVIDER AND CONNECT


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'));
