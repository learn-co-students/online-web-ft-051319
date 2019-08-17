//First step: grab the elements that we want to add event listeners to
let addEmojiArea = document.getElementById("add-emoji-area")
let addButton = document.getElementById("add-button")
let emojiBank = document.getElementById("emoji-bank")
// console.log("AddEmojiArea", addEmojiArea)
// console.log("Add Button", addButton)
console.log("Emoji Bank", emojiBank)

addEmojiArea.addEventListener('click', handleAddEmojiAreaClick)

let form = `
  <form id="emoji-form">
    <input id="input" type="text">
    <input id="submit-emoji" type="submit">
  </form>
`

function handleAddEmojiAreaClick(e){
  console.log(e.target);
  if (e.target.id == "add-button"){
    addEmojiArea.innerHTML = form
    // let emojiForm = document.getElementById("emoji-form")
    // emojiForm.addEventListener('click', function)
    // DON'T DO THIS! HANDLE THE EVENTS USING THE EVENT LISTENER ON THE PARENT DIV
  }
  if (e.target.id == "submit-emoji"){
    e.preventDefault()
    let inputField = document.getElementById("input")
    let inputEmoji = inputField.value
    emojiBank.innerHTML += `<li>${inputEmoji}</li>`
    addEmojiArea.innerHTML = addButton.outerHTML
    //use outerHTML instead of inner
  }

}
