import { createStore } from 'redux'

let initialState = {
  total: 0.00
}

let reducer = (state, action) => {
  switch (action.type){
    case "ADD_QUARTER":
      return {total: state.total + 0.25};
    case "ADD_NICKEL":
      return {total: state.total + 0.05};
    case "ADD_PENNY":
      return {total: state.total + 0.01};
    case "ADD_DIME":
      return {total: state.total + 0.10};
    default:
      return state
  }
}

let store = createStore(reducer, initialState)

export default store
