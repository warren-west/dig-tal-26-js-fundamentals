console.log("Hello world!")
console.log('My name is Warren')
console.log("I'm 33 years old.")

// naming convention for variables is camel casing
// e.g. firstName, lastName, dateOfBirth
// we can't use reserved keywords as variables names in JS (let / const / undefined / true / false)

// undefined is a datatype in JavaScript, like None in Python
// it's the value something has before its initial value

var username = "warren-west" // String -> A string of characters 'w' + 'a' + 'r' ...
const age = 33 // Number
let isMarried = true // Boolean 'true' or 'false'
let lastName = undefined

// NEVER use var variables

// mutable and immutable variables:
isMarried = false // mutable (let variables)
// age = 44 // throws a TypeError (Assignment to constant variable.)

console.log(isMarried)
console.log(age)

console.log(lastName) // ? undefined
lastName = "West"
console.log(lastName) // this will print "West"

// JavaScript is a "weakly-typed" language
// This means that variables don't have to be defined with a datatype
// Also, variables can change datatype during runtime

lastName = 42
console.log(lastName)
lastName = false
console.log(lastName)