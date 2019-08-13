console.log("DOM IS READY!")

let headlines = ["Another student got a great coding job!", "We're opening a campus in SF!", "Flatiron welcomes Designation!"]
let categories = ["UX/UI", "Software Engineering", "Data Science"]
//I am hardcoding these here, generally JavaScript will get this information from a server
//We will use this information to populate our HTML document/ the DOM

console.log("HEADLINES", headlines)
console.log("CATEGORIES", categories)

//I want these headlines to show up in the headline div

//Step 1: Select the element onto which I want to append the children
let headlinesDiv = document.getElementById("headlines")
//document.querySelector("#headlines")
let categoriesDiv = document.getElementById("categories")
//document.querySelector("#categories")

console.log("HEADLINES DIV", headlinesDiv);
console.log("CATEGORIES DIV", categoriesDiv);

//Just adding first headline
// let firstHeadline = document.createElement("h3")
// firstHeadline.innerText = headlines[0]
//console.log("FIRSTHEADLINE", firstHeadline)

//Iterating over all headlines and adding them

headlines.forEach(function(headline){
  let headlineObject = document.createElement("h3")
  headlineObject.innerText = headline
  headlinesDiv.appendChild(headlineObject)
})

categories.forEach(function(category){
  let categoryObject = document.createElement("h3")
  categoryObject.innerText = category
  categoriesDiv.appendChild(categoryObject)
})

// headlinesDiv.appendChild(firstHeadline)

//Alternative Way:
// headlinesDiv.innerHTML += `<h3>${headlines[0]}</h3>`
