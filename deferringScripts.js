console.log("Script is attached to the HTML page.")

// Get DOM Elements
const pText = document.getElementById("p-text")
const btnChange = document.getElementById("btn-change")

// Add event listener for the button
btnChange.addEventListener("click", handleChange)

// function
function handleChange() {
    console.log("Button was clicked")
    pText.innerText = "New text"
}