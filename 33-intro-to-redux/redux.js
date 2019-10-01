let quarters = document.getElementById('quarters')
let nickels = document.getElementById('nickels')
let pennies = document.getElementById('pennies')
let dimes = document.getElementById('dimes')
let container = document.getElementById('container')


//REDUX DOES NOT TRUST YOU
//THE ONLY WAY TO CHANGE STATE IS TO PASS AN ACTION TO THE DISPATCH FUNCTION
const redux = (initialState, reducer) => {
  let state = initialState
  return {
    currentState: () => state,
    //dispatch updates state
    dispatch: (action) => {
      state = reducer(state, action)
      render(state)
      //React will handle re-renders for you becuase info from your Redux state will be passed as props
      //But for the purposes of this application, I needed to write it for you
    }
  }
}

//Let's define our initial state
let coinState = {
  quarters: 0,
  nickels: 0,
  pennies: 0,
  dimes: 0
}

//Let's define our reducer
//a reducer is a logic board that expects a command in order to behabve a certain way
//the best kind of example for Redux in particular is through a the coin sorter bank

let reducer = (state, action) => {
  switch (action.type){
    case "Quarter":
      return {...state, quarters: state.quarters + 1};
    case "Nickel":
      return {...state, nickels: state.nickels + 1};
    case "Penny":
      return {...state, pennies: state.pennies + 1};
    case "Dime":
      return {...state, dimes: state.dimes + 1};
  }

const storeForCoinSorter = redux(coinState, reducer)
//redux is just a function that generates stores. So let's generate a store for this particular app and then save it to a variable to use in our application


function render(stateArg){
  quarters.innerHTML = stateArg.quarters
  nickels.innerHTML = stateArg.nickels
  pennies.innerHTML = stateArg.pennies
  dimes.innerHTML = stateArg.dimes
}

container.addEventListener('click', (e) => {
  if (e.target.className == "button"){
    storeForCoinSorter.dispatch({type: e.target.dataset.type})
    console.log(storeForCoinSorter.currentState())
    //in React, you will want to create your action objects in advance,
    //for the purpose of this demo, we're creating the objects as we need them
  }
})

//
// let increment_quarter = {type: "Quarter"}
// let increment_nickel = {type: "Nickel"}
// let increment_penny = {type: "Penny"}
// let increment_dime = {type: "Dime"}
//
console.log(storeForCoinSorter);


//whenever we want to reference state, we have to remember it's within the execution context of the store we created
render(storeForCoinSorter.currentState())
//because render requires a state, let's pass it the currentState of our application upon initialization, which is all values set to 0
