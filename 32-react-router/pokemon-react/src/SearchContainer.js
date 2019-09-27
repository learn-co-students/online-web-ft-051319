import React from 'react'

//Components
import Header from './Header'
import Container from './Container'

export default class SearchContainer extends React.Component{

    state = {search: ''}

    updateSearch(event) {
      this.setState({search: event.target.value})
    }

    render(){
      return(
        <div id="search-container">
          <Header updateSearch={this.updateSearch.bind(this)}/>
          <Container search={this.state.search}/>
        </div>
      )
    }

}
