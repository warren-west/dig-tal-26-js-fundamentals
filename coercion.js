// Coercion - the part of the JavaScript engine that deals with trying to "guess" datatypes
// We have different operators in JavaScript ( + - * / = == === !== )
// "Warren" + " " + "West"
console.log(false + true)
console.log("Warren" + " " + "West")
console.log(10 + 5 + 2)
console.log("5" + 5)
console.log("5" + "5")
console.log("7" - 2)
console.log("7" - "2")
console.log(7 - 2)
console.log(7 - true) // 6
console.log(7 + true) // 8
console.log(7 + "true") // 7true
console.log(7 + "false") // 7false
console.log(7 + false) // 7
console.log(5 - "true") // NaN = Not a Number

// true = 1
// false = 0