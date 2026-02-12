// DRY = Don't Repeat Yourself
// Functions help prevent unnecessary repetition

const number1 = 5
const number2 = 7
const number3 = 12

// console.log(`Sum of num1 and num2: ${addTwoNumbers(number1, number2)}`)
// console.log(`Sum of num2 and num3: ${addTwoNumbers(number2, number3)}`)
// console.log(`Sum of num1 and num3: ${addTwoNumbers(number1, number3)}`)

// We have repeating code
// Instead of repeating our code, we can identify the repeating code
// Identify the arguments it needs to function
// Wrap it inside of a function block

function addTwoNumbers(num1, num2) {
    return num1 + num2
}

// example of a VOID function: (no return)
function displayGreetingMessage(firstName) {
    console.log(`Hello ${firstName}`)
}

// displayGreetingMessage("Warren")
// displayGreetingMessage("Sean")
// displayGreetingMessage("James")
// displayGreetingMessage("Ella")
// displayGreetingMessage("Sarah")

// Test your understand of a console.log() vs a function that returns a string

// Create a function that returns a string
function generateInvoiceLine(productName, quantity, individualPrice) {
    // we want the output to look like this:
    // 3x Tennis Ball   12.00 kr.
    let output = ""
    output = `${quantity}x ${productName}\t${individualPrice * quantity} kr.`
    return output
}

// Multiplication coercion:
// num1 * num2
// Is num1 an integer or a decimal? Is num2 an integer or decimal?
// If they are both integers, I can return an integer value
// If one of them is a decimal, then I'll return a decimal value

console.log(generateInvoiceLine("Tennis Ball", 3, 4.99))
console.log(generateInvoiceLine("Apple", 1, 7.50))
console.log(generateInvoiceLine("Bread Loaf", 2, 25.25))
console.log(generateInvoiceLine("Peanut Butter", 10, 30.00))

printInvoiceLine("Tennis Ball", 3, 4.99)
printInvoiceLine("Apple", 1, 7.50)
printInvoiceLine("Bread Loaf", 2, 25.25)
printInvoiceLine("Peanut Butter", 10, 30.00)

// This is a VOID function:
function printInvoiceLine(productName, quantity, individualPrice) {
    // we want the output to look like this:
    // 3x Tennis Ball   12.00 kr.
    console.log(`${quantity}x ${productName}\t${individualPrice * quantity} kr.`)
}

// A VOID function in JavaScript doesn't return nothing, it returns UNDEFINED

console.log(console.log()) //?


// Returns true if the number is positive
// A positive number is anything higher than or including 0
function isPositive(number) {
    return number >= 0
}

console.log(isPositive(5)) // true
console.log(isPositive(-5)) // false
console.log(isPositive(0)) // true