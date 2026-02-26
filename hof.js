// Higher Order Functions
const numbers = [ 23, 45, 44, 37, 55, 58, 18 ] // ages?
const names = ['Warren', 'James', 'Peter', 'Ash', 'Joe', 'Christoffer']

// HOF?
// Simply put, 
// a function that receives a function as an argument

// ---< 40 >---
// functions
const lessThan40 = (number) => number < 40
const greaterThan40 = (number) => number > 40

// #region Custom HOF
// function filterNumbers(listOfNumbers, filterFunction) {
//     const resultArray = []
//     // which loop to use? A: for...of ✅ or B: for...in ❌
//     for (let num of listOfNumbers) {
//         // loop through each number of the array
//         if (filterFunction(num)) {
//             // checking if the number fulfils the filterFunction
//             // if it does, add it to the results array
//             resultArray.push(num)
//         }
//     }
//     // return the results array
//     return resultArray
// }


// const numbersLT40 = filterNumbers(numbers, lessThan40)
// const numbersGT40 = filterNumbers(numbers, greaterThan40)


// console.log(numbersLT40) // ?
// console.log(numbersGT40) // ?

// #endregion

// Iterator methods (because they iterate through arrays)
const numbersLT40 = numbers.filter((element) => element < 40)
const numbersGT40 = numbers.filter((element) => element > 40)

const namesLT4 = names.filter((name) => name.length < 4)
const namesGT4 = names.filter((name) => name.length > 4)

// Find "special" numbers
// A special number, is a number that is even when its index is even
// Or odd when its index is odd

const longSpecialNumbers = numbers.filter((num, index) => {
    // are these variables necessary?
    // maybe they make the code more readable, but
    // maybe shortening the code is easier to read
    let idxIsEven = index % 2 === 0
    let numIsEven = num % 2 === 0


    // if you're using a conditional statement to return true or false
    // you can return the conditional statement directly
    if (idxIsEven === numIsEven) {
        return true
    } else {
        return false
    }
})

const specialNumbers = numbers
    .filter((num, index) => (index % 2 === 0) === (num % 2 === 0))

console.log(longSpecialNumbers)
console.log(specialNumbers)


const values = [1, 2, 3, 4, 5, 6];


const evenNumbers = values.filter((v) => v % 2 !== 0)
console.log(evenNumbers) // ?









// Sidenote:
// Using a regular for loop:
// const names = ['Warren', 'James', 'Peter']

// for (let i = 0; i < names.length; i++) {
//     console.log(`${i}: ${names[i]}`)
// }