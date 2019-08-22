//JS file was required at bottom of HTML file so no need for DOMContentLoaded

//Store here all variables that point to important DOMnodes or things that will be used
//in the application

const toyCollection = document.querySelector("#toy-collection")
const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
const submitButton = document.querySelector('.submit')
const formInputs = document.querySelectorAll('.input-text')
// the difference between querySelector and querySelectorAll is that the former grabs the first
//and the latter grabs each element with that class name

let addToy = false

addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
  } else {
    toyForm.style.display = 'none'
  }
})

//above is event listener with arrow function callback definition
//below is even listener with regular function callback definition
//just for you to see the difference

//when functions aren't given a name/variable, they're called anonymous
//we usually use anonymous functions when they only need to be used in one situation
//once we see that functions SHOULD be used, OR a refactor is necessary, we define them
//for example, the putToysOnDom method below was at first an anonymous functions
//and then we refactored so needed to define it elsewhere
//regular methods are defined after the function keyword
//ex function myFunc(){code here}
//or are anyonymous without a name
// ex function(){code here}
//arrow functions need to be saved to a variable
// ex const myFunc = () => code here
// they can only be written anonymously where a definition is required
// for example, the callback in the event listener above

submitButton.addEventListener('click', function(event){
  //forms submissions automatically cause a refresh. We don't want this!
  event.preventDefault()
  //GOAL: Submit values from form as a post request, and then update the DOM with those inputs
  //Step 1: Get the values from the form!
  //Because we need to ultimately submit an object, let's just make it here!
  // console.log(formInputs[0].value, formInputs[1].value);
  let newToyObj = {
    name: formInputs[0].value,
    image: formInputs[1].value,
    likes: 0
  }
  // console.log(newToyObj);
  //Step 2: Use fetch to SEND this obj to the 'database'
  //if we don't want a GET request, a second argument of an object is required
  fetch("http://localhost:3000/toys", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    //when we send information, we need to stringify it
    body: JSON.stringify(newToyObj)
  })
  //when we receive information, we need to jsonify it
  .then(res => res.json())
  //the server returned the successfully made object, and THAT'S what we want to render to the dom
  //Pessimistic way of rendering
  .then((newToyFromDB) => {
    // console.log(res);
    putToysOnDom([newToyFromDB])
    window.scrollTo(0,document.body.scrollHeight);
  })

  //Optimistic way of rendering:
  //putToysOnDom([newToyObj])

})

function putToysOnDom(toyObjArray){
  console.log("Rendered to DOM");
  toyObjArray.forEach(toyObj => {
    toyCollection.innerHTML += `<div class="card">
      <h2>${toyObj.name}</h2>
      <img src=${toyObj.image} class="toy-avatar" />
      <p>${toyObj.likes} Likes </p>
      <button data-toyid=${toyObj.id} class="like-btn">Like <3</button>
    </div>
    `
    //putting the toy's ID in the data will help when implementing LIKE feature
  })
}

//arrow function way:
//*big difference is really in the first line with longer functions
// const putToysOnDom = (toyObjArray) => {
//   toyObjArray.forEach(toyObj => {
//     toyCollection.innerHTML += `<div class="card">
//       <h2>${toyObj.name}</h2>
//       <img src=${toyObj.image} class="toy-avatar" />
//       <p>${toyObj.likes} Likes </p>
//       <button data-toyid=${toyObj.id} class="like-btn">Like <3</button>
//     </div>
//     `
//   })
// }

//we can call fetch here at the bottom because we want this to happen as soon as the DOM is ready
fetch("http://localhost:3000/toys")
  //without an arugment, fetch automatically makes a GET request
  //.then waits for the previous promise to resolve
  //and then accepts a callback function reference OR FUNCTION DEFINITION/DECLARATION
  //that handles the result of the promise
  .then(response => response.json())
  //above is a function definition/declaration of an anonymous functions
  //below is a reference to the function
  //notice that the function definition accepts an argument
  //.then will automatically pass the argument to the reference upon invocation
  .then(putToysOnDom)
  //a quick note about arrow vs reuglar functions
  // - arrow functions need to be saved to variables
  // - if an arrow function has only 1 arg, it doesn't need ()
  // ex: const myFunc = () => console.log("Hi")
  // if it's a one liner, it doesn't need curly braces or a return
  // ex: const myFunc = () => {
  //  return "hi"
  //}
  // but all of this is the same as writing:
  // function myFunc(){
  // return "hi"
  //}
  // Arrow functions are sometimes just shorter and more convenient,
  //which is why we use them. They have another special feature
  //that you'll learn later, in  week 3
