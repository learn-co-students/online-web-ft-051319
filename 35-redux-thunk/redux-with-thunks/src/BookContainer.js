import React from 'react'
import {connect} from 'react-redux'

import Book from './Book'

const BookContainer = (props) => {
  console.log(props);

  let books = props.books.map(book => {
    let bookInfo = book.volumeInfo
    return <li><Book title={bookInfo.title}/></li>
  })
  return(
    <div>
      <ul>
        {books}
        {/* Books are going to be rendered here */}
      </ul>
    </div>
  )
}
//
// const mapStateToProps = (state) => {
//   return {books: state.books}
// }

const mapStateToProps = (state) => ({...state})

export default connect(mapStateToProps)(BookContainer)
