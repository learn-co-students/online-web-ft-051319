const UPDATE_BOOKS = "UPDATE_BOOKS"

//OLD WAY! WORKS FINE!
// function updateBooks() {
//   return{
//     type: UPDATE_BOOKS,
//     books
//   }
// }

//NEW WAY!
//WE DO THIS ULTIMATELY SO THAT WE CAN HANDLE OUR ASYNC LOGIC
//FROM WITHIN THE DEFINITION OF AN ACTION CREATOR
//RATHER THAN WITHIN THE COMPONENT
//SIMPLY BECAUSE THIS SEEMS LIKE THE MOST FIT PLACE FOR THIS LOGIC TO LIVE
//NOT BECAUSE IT WON'T WORK ANYWHERE ELSE

function updateBooks(term) {
  console.log("WE CALLED IT!");
  return (dispatch) => {
    console.log("FETCHING!");
    fetch("https://www.googleapis.com/books/v1/volumes?q=" + term)
         .then(res => res.json())
         .then((res) => {
           dispatch({
               type: UPDATE_BOOKS,
               books: res.items
          })
        })
    }
}

export default updateBooks
