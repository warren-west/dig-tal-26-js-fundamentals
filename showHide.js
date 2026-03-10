/* DOM ELEMENTS */
const btnShowHide = document.getElementById("btn-show-hide")
const imgShowHide = document.getElementById("img-two-towers")

/* GLOBAL VARIABLES */
let show = true

/* EVENT LISTENERS */
btnShowHide.addEventListener("click", handleShowHideClick)

/* HANDLER FUNCTIONS */

// JSDocs is an official standard of writing documentation for your functions, classes

/**
 * An event handler function that is triggered by the show / hide button.
 */
function handleShowHideClick() {
    // TODO: Implement show and hide logic
    console.log("Button clicked!")

    // How do we make this style toggle "on" and "off"?
    showHideUI()
}

/* FUNCTIONS */

/**
 * A function to toggle the visibility of two elements on the page.
 */
function showHideUI() {
    // ternary statement syntax:
    // imgShowHide.style.display = show ? "none" : "block"
    // btnShowHide.innerText = show ? "Show Image" : "Hide Image"

    // if statement syntax:
    if (show) {
        imgShowHide.style.display = "none"
        btnShowHide.innerText = "Show Image"
    } else {
        imgShowHide.style.display = "block"
        btnShowHide.innerText = "Hide Image"
    }

    // toggle logic:
    show = !show
}

/**
 * A function to initialize the state of the UI when the page loads.
 */
function initializePageElements() {
    console.log('Page elements initializing...')

    // set up the initial UI state
    showHideUI()
}

/* RUNTIME */
console.log('Test')

// initialize the state of the UI elements:
initializePageElements()