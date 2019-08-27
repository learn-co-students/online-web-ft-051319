let animals = {
  dogs: ["Mango", "Marey"],
  cats: ["Eneas"]
}
// console.log(animals);

//DESTRUCTURING with Objects

//let dogs = animals['dogs'] or animals.dogs
//there's a key called dogs in animals whose value I want to make a variable
let { dogs, cats } = animals
//the variable is made out of the key
// console.log("Dogs", dogs, "Cats", cats);

//DESTRUCTURING with Arrays
let students = ["Brian", "Natalie", "Haley"]
let [student1, student2, student3 ] = students
//in the students array, take the first three students and name them like so
// console.log("Students", student1, student2, student3)
//the variable is may out of the index
// console.log(first, second);

//FURTHER APPLICATION OF DESTRUCTUING
//we'll expect that the arguments that get passed in are name, age, breed
function dogBuilder({name, age, breed, favGames}){
  //destructuring arguments
  let obj = {
    //if the key name matches the name of a variable that points
    //to the variable you want to assign, you can leave it as one word
    name,
    breed,
    age,
    favGames
  }
  return obj
}

let henry = dogBuilder({name: "Henry", age: 2, breed: "Mut", favGames: ["Fetch", "Get"]})

//SPREAD OPERATOR
//a way to make new objects out of old objects
// let marshall = dogBuilder({name: "Marshall", age: henry.age, breed: "German Shepard", favGames: henry.favGames})
// marshall.favGames.push("Fight the cat")
//OBJECTS such as Object Literals and Arrays are passed by reference
//other data types such as strings and integers are passed by value
//**send more resources on this
// console.log("Henry", henry, "Marshall", marshall);
// console.log("Are Marshall and Henry sharing the same object?", henry.favGames === marshall.favGames);
// console.log("Are Marshall and Henry sharing the same age?", henry.age === marshall.age);
//IN ORDER TO AVOID THIS, WE NEED TO MAKE A COPY
//spread operator on array literal
// let marshall = dogBuilder({name: "Marshall", age: henry.age, breed: "German Shepard", favGames: [...henry.favGames]})
// console.log("Are Marshall and Henry sharing the same age?", henry.favGames === marshall.favGames);
//spread operator on object literal
//if marshall is basically identical to Henry except older
//apparently we can reset values to pre-existing keys, but we cannot add new keys 🤔
let marshall = dogBuilder({...henry, name: "marshall", age: 7, favGames: [...henry.favGames, "Sleep"]})

//OLD WAY USING OBJECT.ASSIGN({}, arg)
//let marshall = dogBuilder(Object.assign({}, henry))
console.log(marshall);
