import React from 'react'

import {addQuarter, addNickel, addPenny, addDime} from './redux/actionCreators'

import { connect } from 'react-redux'
//AGAIN, REDUX DOES NOT TRUST YOU. YOU CAN'T TOUCH THE STORE DIRECTLY.
//YOU CAN ONLY USE THE FUNCTIONS/COMPONENTS THAT REDUX GIVES YOU IN ORDER TO MAKE CHANGES TO THE STORE/ACCESS IT

//Connect returns what we call a Higher Order Component, AKA HOC. HOC's accept a Component as an argument and return a copy of that component,
//but with added props, features etc.

const ButtonContainer = (props) => {
  //if there is no second argument passed in to CONNECT (ie mapDispatchToProps, the dispatch function will come through in the props)
  console.log(props.addQuarter);
  return (
    <div>
      <button onClick={props.addQuarter}>Add A Quarter</button>
      <br/>
      <br/>
      <button onClick={props.addNickel}>Add A Nickel</button>
      <br/>
      <br/>
      <button onClick={props.addPenny}>Add A Penny</button>
      <br/>
      <br/>
      <button onClick={props.addDime}>Add A Dime</button>
      <br/>
      <br/>
    </div>
  )
}
// we an manually bind the actionCreators to dispatch and pass this function as the 2nd argument to connect
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addQuarter: () => dispatch(addQuarter()),
//     addNickel: () => dispatch(addNickel()),
//     addPenny: () => dispatch(addPenny()),
//     addDime: () => dispatch(addDime()),
//   }
// }

//Does ButtonContainer display any info from the store? NO. Does not need mapStateToProps.
//Does ButtonContainer need to send dispatches to change the store? YES. Needs mapDispatchToProps

export default connect(null, {addQuarter, addNickel, addPenny, addDime})(ButtonContainer)

//connect ultimately 4 arguments, but you're likely only gonna ever use the first two...at least in this stage of your learning
//those 2 are 1) mapStateToProps, 2) mapDispatchToProps
//if you don't need mapStateToProps but need mapDispatchToProps, the first argument should be null

//the second argument, commonly called mapDispatchToProps, can either be a function that returns an object with bound actionsCreators manually bound to dispatch
//OR it can be a plain objects with keyValue pairs that have the actionCreators functions in them and connect will automatically bind each one to dispatch for us
