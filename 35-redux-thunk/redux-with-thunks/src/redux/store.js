import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

let initialState = {books: []}

let reducer = (state = initialState, action) => {
    switch (action.type){
      case 'UPDATE_BOOKS':
        return {books: action.books};
      default:
        return state
    }
}

let store = createStore(reducer, initialState, applyMiddleware(thunk))

//thunk allows actionCreators to return functions instead of plain objects AND PASSES DISPATCH INTO THAT FUNCTION
//SO THAT WE CAN USE IT IN FURTHER LOGIC
//this way, we can handle asynchronous logic inside of our actionCreators
//and we don't have to define them in our components, which pollutes the component (makes it look busy)
//and also separate out logic between the component and the store


export default store
