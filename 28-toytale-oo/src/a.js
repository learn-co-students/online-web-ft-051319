class Adapter {
  constructor(url){
    this.baseUrl = url
    this.toyCollection = document.querySelector("#toy-collection")
    this.addBtn = document.querySelector('#new-toy-btn')
    this.toyForm = document.querySelector('.container')
    this.submitBtn = document.querySelector('.submit')
    this.formInputs = document.querySelectorAll('.input-text')
    this.addToy = false
    this.toys = []
    this.headerObj = {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }

    this.addBtn.addEventListener('click', this.toggleToyForm)
    this.submitBtn.addEventListener('click', this.handleSubmitForm)
    this.toyCollection.addEventListener('click', this.handleLike)


  }

  getToys() {
    return fetch(this.baseUrl)
    .then(res => res.json())
    .then(toyArray => {
      toyArray.forEach(toy => {
        let newToy = new Toy(toy)
        this.toys.push(newToy)
      })
    })
    .then(this.renderToys)
  }

  renderToys = () => {
    console.log(this);
    this.toyCollection.innerHTML = ``
    this.toys.forEach(toy => {
      this.toyCollection.appendChild(toy.render())
    })
  }

  postToy(toyObj) {
    return fetch(this.baseUrl, {
      method: "POST",
      headers: this.headerObj,
      body: JSON.stringify(toyObj)
    })
    .then(res => res.json())
    .then(toyObj => this.toys.push(new Toy(toyObj)))
    .then(this.renderToys)
  }

  toggleToyForm = () => {
    console.log(this);
    // hide & seek with the form
    this.addToy = !this.addToy
    if (this.addToy) {
      this.toyForm.style.display = 'block'
    } else {
      this.toyForm.style.display = 'none'
    }
  }

  handleSubmitForm = (event) => {
    event.preventDefault()

    let newToyObj = {
      name: this.formInputs[0].value,
      image: this.formInputs[1].value,
      likes: 0
    }
    this.postToy(newToyObj)
  }

  handleLike = (event) => {
    let toyId = event.target.parentElement.dataset.toyId
    let toy = this.toys.find(toy => toy.id == toyId)
    toy.likes += 1
    this.renderToys()
  }
}

let adapter = new Adapter("http://localhost:3000/toys")
adapter.getToys()
