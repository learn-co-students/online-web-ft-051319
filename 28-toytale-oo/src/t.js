class Toy {
  constructor({name, image, likes, id}){
    this.name = name
    this.image = image
    this.id = id
    this.likes = likes
    this.div = document.createElement('div')
    this.div.dataset.toyId = `${this.id}`
    this.div.className = "card"
  }

  render() {
    this.div.innerHTML = `<h2>${this.name}</h2>
      <img src=${this.image} class="toy-avatar" />
      <p>${this.likes} Likes </p>
      <button class="like-btn">Like <3</button>
      `
    return this.div
  }

}
