//
// let charlie = {
//   name: "Charlie",
//   foodAmount: 0,
//   breed: "Lab",
//   owner: "Chris",
//   feedMe: (amount) => {
//     this.foodAmount += amount
//     console.log(this, foodAmount);
//   }
// }

//
// let mango = {
//   name: "Mango",
//   age: 1,
//   breed: "Mutt",
//   owner: "Chris"
// }
//
//
// function dogTag(){
//   console.log("What is this?", this);
//   console.log("My name is " + this.name);
// //  this points to the object that this method is being called on
// }

//when I call bind on a function and pass in an object
//the execution is manually determined
//
// const mangosDogTag = dogTag.bind(mango)
//
// charlie.dogTag = mangosDogTag

//
// function dogCreator(name, age, breed, owner){
//   let newDogObj = {
//     name,
//     age,
//     breed,
//     owner,
//     dogTag,
//     }
//   }
//   return newDogObj
// }



// let newDog = dogCreator("Chip", 2, "Golden Rtrvr", "Chris")
// newDog {name: "Chip", age: 2, breed: "Golden Rtrvr", owner: "Chris"}

// function Dog(name, age, breed, owner){
//   let newDogObj = {
//     name,
//     age,
//     breed,
//     owner
//   }
//   return newDogObj
// }

class Animal {
  constructor(name, age){
    // console.log(this);
    this.name = name
    this.age = age
  }

  sayName(){
    console.log(this.name)
  }
}

class Dog extends Animal {
  constructor(name, age, breed, owner){
    super(name, age)
    this.breed = breed
    this.owner = owner
    this.favTreats = ["Peanut Butter", "Bones"]
  }

  addTreat(treat){
    this.favTreats.push(treat)
  }

  eatTreats(){
    this.favTreats.forEach((treat) =>  {
     console.log(this);
     console.log(this.name + " is eating " + treat);
    })
  }

  havePuppy(name, age, breed, owner){
    let puppy = new Dog(name, age, breed, owner)
    puppy.whoIsMom = () => {
      console.log(this.name + " is the mom!")
    }
    return puppy
  }
    //this normal function as a callback doesn't work because
    //the execution context is lost, the method isn't being called on a definite object
    // this.favTreats.forEach(function(treat){
    //   console.log(this);
    //   console.log(this.name + " is eating " + treat);
}

let dog1 = new Dog("Mango", 2, "Lab", "Chris")
let puppy = dog1.havePuppy("Chip", 0, "Pug", "Chris")
puppy.whoIsMom()

// class DogWalker {
//   constructor(name){
//     this.name = name
//     this.responsibilities = []
//   }
// }
//
// let dog1 = new Dog("Mango", 2, "Lab", "Chris")
// let dog2 = new Dog("Chip", 2, "Mutt", "Chris")
// let mike = new DogWalker("Mike")



//the keyword this refers to the execution context of that line of code
//meaning, where exactly are we when we say `this`
//it points to the nearest javascript object
//not talking about the datatype {}
//I'm talking about a variable, a function,
//a context in which something can be exectured
