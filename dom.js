console.log("I'm connected")

console.log(document) // Logging out the DOM


// The DOM is a JavaScript object that models the HTML page we are viewing.
// Document Object Model

// We can use this DOM object to manipulate the current page.
// E.g., adding new elements, modifying existing elements, and removing elements.

// Two commonly used functions on the DOM:
// .createElement() add an element
// .appendChild() attach an element to the DOM to be displayed
// .getElementById() fetch an element
// const newPTag = document.createElement('p')

// configure the new <p>
// newPTag.innerText = "Customer list:"

// render the new <p> to the page
// document.body.appendChild(newPTag) // attach the P tag to the (end of) <body>

const customerListArray = ['Warren West', 'Jason Bateman', 'Ryan Reynolds', 'Taylor Swift']

// We usually use kebab-casing to name HTML elements
// this-is-kebab-casing
const customerListUlEl = document.getElementById('customer-list')

console.log(customerListUlEl)

// fetch the button element
const btnPopulateCustomers = document.getElementById('btn-populate-customer-list')

// EVENTS:
// Events are actions triggered by the user interacting with our web pages
// Examples include: clicks, changes, mouseOver, mouseLeave, keyboard presses
// We can set up LISTENERS to listen out for these event occurrences

btnPopulateCustomers.addEventListener('click', handleButtonClick)

function handleButtonClick() {
    // handle the "side effect" of the button click here:
    console.log("The button was clicked")

    // What if we put this into a loop?
    for (let customer of customerListArray) {
        const newElement = document.createElement('li')
        newElement.innerText = customer
        customerListUlEl.appendChild(newElement)
    }
}


// fetch list of elements by class:
const arrayOfPTags = document.getElementsByClassName('text')

for (let p of arrayOfPTags) {
    p.classList += " underlined"
    p.setAttribute('title', "A new title")
}