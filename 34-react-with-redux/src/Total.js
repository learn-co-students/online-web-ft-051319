import React from 'react'

import {connect} from 'react-redux'

const Total = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Total:</h1>
      <h3>{props.stateTotal}</h3>
    </div>
  )
}

const mapStateToProps = (state) => {
  //this function is being called from within connect. Connect will pass it the Redux store's state
  console.log(state);
  return {
    stateTotal: state.total
  }
}

export default connect(mapStateToProps)(Total)

//Because Total is going to demonstrate information FROM the store, it needs mapStateToProps
//Because it isn't going to change the store, it doesn't need mapDispatchToProps
