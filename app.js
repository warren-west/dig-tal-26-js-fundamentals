import { tripleNumber, powerOfThree } from "./modules/utils.js"
import specialFunction from "./modules/tools.js"
// imports are typically found at the top of our script

console.log("Hello from app.js")

// What are modules?
// Using a modular design allows us to separate code / logic into multiple JavaScript files.

// ./modules.html
//    🔽
// ./app.js (type="module")
//       🔽
//      ./modules/utils.js
//      ./modules/tools.js

// DOM Elements
const btnProcess = document.getElementById("btn-process")
const inputNumber = document.getElementById("input-number")

// Event listener
btnProcess.addEventListener("click", handleProcessNumber)


// Handler Functions
function handleProcessNumber() {
    // console.log(inputNumber.value)
    const tripleResult = tripleNumber(inputNumber.value)
    const raisedByThreeResult = powerOfThree(inputNumber.value)
    console.log(tripleResult)
    console.log(raisedByThreeResult)

    if (inputNumber.value < 0 || inputNumber.value > 9) {
        console.log("That number is too big or too small...")
    } else {
        // process the number
        const resultNumToString = specialFunction(Number(inputNumber.value))
        console.log(resultNumToString)
    }
}

// Functions
