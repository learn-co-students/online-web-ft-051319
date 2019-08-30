class App {

  constructor(baseURL){
    this.baseURL = baseURL
    this.toyCollection = document.querySelector("#toy-collection")
    this.addButton = document.querySelector('#new-toy-btn')
    this.toyForm = document.querySelector('.container')
    this.submitButton = document.querySelector('.submit')
    this.formInputs = document.querySelectorAll('.input-text')
    this.addToy = false
    this.toys = []

    this.addButton.addEventListener('click', this.toggleButton)
    // this.submitButton.addEventListener('click')
    this.toyCollection.addEventListener('click', this.handleLike)
  }

  handleLike = (event) => {
    if (event.target.className == "like-btn"){
      let toyid = event.target.dataset.toyid
      let toy = this.toys.find(toy => toy.id == toyid)
      console.log(event.target, toyid, toy);
      toy.likes += 1
      this.renderAllToys()
    }
  }

  toggleButton = () => {
    console.log(this);
    this.addToy = !this.addToy
    if (this.addToy) {
      this.toyForm.style.display = 'block'
    } else {
      this.toyForm.style.display = 'none'
    }
  }

  renderAllToys = () => {
    this.toyCollection.innerHTML = ""
    this.toys.forEach(toy => {
      this.toyCollection.appendChild(toy.render())
    })
  }

  fetchToys(){
    fetch(this.baseURL)
    .then(res => res.json())
    .then(toyArray => {
      toyArray.forEach(toyObj => {
        let newToy = new Toy(toyObj)
        this.toys.push(newToy)
      })
      this.renderAllToys()
    })
  }
}

let app = new App("http://localhost:3000/toys")
app.fetchToys()
