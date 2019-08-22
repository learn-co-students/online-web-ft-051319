const birdContainer = document.querySelector("#bird-container")
const birdNameInput = document.querySelector("#bird-name-input")
const birdSpeciesInput = document.querySelector("#bird-species-input")
const submitBirdButton = document.querySelector("#submit-bird-button")

const headersObj = {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }

submitBirdButton.addEventListener("click", (e) => {
  e.preventDefault()
  let birdObj = {
    name: birdNameInput.value,
    species: birdSpeciesInput.value
  }

  fetch("http://localhost:3000/birds/1", {
    method: "PATCH",
    headers: headersObj,
    body: JSON.stringify(birdObj)
  })
  .then(res => res.json())
  .then(console.log)
})

fetch("http://localhost:3000/birds")
  .then(res => res.json())
  .then(birdArray => birdArray.forEach(bird => {
    birdContainer.innerHTML += `
      <h4>${bird.name}</h4>
      <p>${bird.species}</p>
    `
  }))
