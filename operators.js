// #region Math operators
// + - * / %

let number1 = 15
let number2 = 8

console.log(number1 + number2)
console.log(number1 - number2)
console.log(number1 * number2)
console.log(number1 / number2)
console.log(number1 % number2)

// Modulus:
// Dividing 2 numbers, and returning the remainder
// E.g. 5 % 2 -> 5 / 2 and return the remainder
// So 5 / 2 = 2, 1 "left over" = 1
// 15 / 8 -> 1, 7 "left over" = 7
// 6 % 3 -> 2, 0 "left over" = 0

console.log(number1 += 2) // A = 17
console.log(number2 -= 2) // B = 6

// ++, --
// specifically for incrementing or decrementing by 1
console.log(number1++) // number1 = 18
console.log(number2--) // number2 = 5

console.log("++ and -- order")
let favNum = 42

console.log(favNum)     // 42
console.log(++favNum)   // 43
console.log(--favNum)   // 42

// #endregion


// #region Comparison operators

// > greater than, >= greater than or equal to
// < less than, <= less than or equal to
// == equal to, === strictly equal to, !== not equal to

console.log('Comparison OPERATORS')
console.log(1 == true) // true
console.log(1 === true) // false
console.log(1 == "1") // true
console.log(1 === "1") // false
console.log(1 === 1) // true

// #endregion

// #region
/*
    LOGICAL OPERATORS:
    ! (not), && (and), || (or)
*/
// &&
console.log(1 === 1 && 2 > 1) // true
console.log(5 > 1 && 5 < 3) // false
// ||
console.log(1 === 1 || 2 > 1) // true
console.log(5 > 1 || 5 < 3) // true
console.log(5 < 4 || 5 < 3) // false

// T && T -> true
// T && F -> false
// F && F -> false

// T || T -> true
// T || F -> true
// F || F -> false


// #endregion

// Template literals:
// Creating formatted strings with backtick characters ` `
// Use string interpolation with ${}

let petName = "Yoda"
let petColor = "black"
let petType = "cat"
let eyeColor = "yellow"
let petWeight = 4.5
let petBirthday = new Date(2020, 9, 20, 0, 0, 0, 0)

console.log("Something new")

console.log(`Pet name: ${petName.toUpperCase()}\nSpecies: ${petType}
Pet Color: ${petColor}
Eyes: ${eyeColor}
Weight: ${petWeight}kg
DOB: ${petBirthday.toLocaleDateString()}`)

console.log(`I am ${2026 - 1992} years old.`)