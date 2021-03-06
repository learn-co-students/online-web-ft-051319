class Toy {
  constructor({id, name, image, likes}){
    this.id = id
    this.name = name
    this.image = image
    this.likes = likes
    this.div = document.createElement('div')
    this.div.className = "card"
  }

  render(){
    this.div.innerHTML = `
      <h2>${this.name}</h2>
      <img src=${this.image} class="toy-avatar" />
      <p>${this.likes} Likes </p>
      <button data-toyid=${this.id} class="like-btn">Like <3</button>
    `
    return this.div
  }
}
