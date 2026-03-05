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

// #region FILTER

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

// console.log(longSpecialNumbers)
// console.log(specialNumbers)


const values = [1, 2, 3, 4, 5, 6];


const evenNumbers = values.filter((v) => v % 2 !== 0)
// console.log(evenNumbers) // ?

// #endregion

// #region MAP

// .map() is also a helper function that we can use straight from the Array.prototype
// It will always return a new array with the same number of elements as the original.


const numbersToBeDoubled = [ 8, 4, 5, 2, 3, 7 ]
// doubledNumbers =        [ 16, 8, 10, 4, 6, 14 ]
// numbersMultipliedByIndex = [0, 4, 10, 6, 12, 35]

// multiplying each element by its index
const numbersMultipliedByIndex = numbersToBeDoubled.map((num, idx) => num * idx)
// console.log(numbersMultipliedByIndex)


const doubledNumbers = numbersToBeDoubled.map((num) => {
    // console.log(num) // the current value of num
    return num * 2 // the result that should be pushed onto the new array
})

// console.log(doubledNumbers) // the resulting array
// check that the number of elements is still the same
// check that the values of the new array are correct (numbers have been doubled)


const cars = ['toyota', 'honda', 'citroen', 'renault', 'audi', 'volkswagen' ]

const upperCaseCarsGT6 = cars.map((car) => car.toUpperCase()).filter((car) => car.length > 6)

// console.log(upperCaseCarsGT6) // does it include all the cars? They are all uppercase?

// REFERENCE TO THE FUTURE
// When we learn how to work with HTML elements in JavaScript, the .map() function gets interesting:
// const liElements = ['<li>Item 1</li>', '<li>Item 2</li>', '<li>Item 3</li>']
// const newElements = liElements.map((element) => element.innerText += '<a href=""></a>')


// results from converting each car name into the name's length
// const carNameLengths = [ 6, 5, 7, 7, 4, 10 ]
const carNameLengths = cars.map((car) => car.length)
// console.log(carNameLengths)



// #endregion

// #region REDUCE

// .reduce() function does not return an array, it returns a single result (an aggregate)
// we want to sum up all the numbers in an array
const numbersToBeAddedTogether = [ 5, 5, 4, 4, 3, 6 ] // result should be 27

const sum = numbersToBeAddedTogether.reduce((prev, curr) => prev + curr, 0)
const product = numbersToBeAddedTogether.reduce((prev, curr) => prev * curr, 1)

// console.log(sum) // 27
// console.log(product) // 7200


// #endregion

// #region EVERY / SOME

const temperatures = [ 20, 22, 18, 6, 20, 15, 22, 12, 10 ]

// Do some of the values in the array meet this condition?
const temperaturesSome = temperatures.some((temp) => temp === -22)
// Does every value in the array meet this condition?
const temperaturesEvery = temperatures.every((temp) => temp > 0)

// console.log(temperaturesSome)
// console.log(temperaturesEvery)

// #endregion

// #region SORT

const firstNames = [ 
    { firstName: 'James', age: 20, isMarried: false },
    { firstName: 'Warren', age: 33, isMarried: true },
    { firstName: 'Chris', age: 24, isMarried: false },
    { firstName: 'Oprah', age: 56, isMarried: true },
    { firstName: 'Alice', age: 44, isMarried: true },
]

// Sorting based on a Number value
// const peopleSortedByAge = firstNames.sort((a, b) => {
//     return b.age - a.age
// })

// Sorting based on a String value
// const peopleSortedByFirstname = firstNames.sort((a, b) => {
//     // how do we deal with sorting strings on objects:
//     return b.firstName.localeCompare(a.firstName)
//     // "A" and "A" returns 0
//     // "A" and "B" returns 1
//     // "B" and "A" returns -1
// })

// Sorting based on a Boolean value:
// const peopleSortedByMarriedStatus = firstNames.sort((a, b) => {
//     return b.isMarried - a.isMarried
// })

// console.log(peopleSortedByAge)
// console.log(peopleSortedByFirstname)
// console.log(peopleSortedByMarriedStatus)

// const nums = [ 5, 16, 32, 331, 5, 50, 162 ]

// console.log(nums.sort()) // default sort (numbers)
// console.log(firstNames.sort()) // default sort (string)

// const sortedNumbersDesc = nums.sort((a, b) => {
//     // we subtract the numbers from each other
//     // to determine the difference
//     // and decide if we want to sort them asc or desc
//     return b - a
// })

// console.log(sortedNumbersDesc)

const daysOfWeek = [
    {day: 'Tuesday', id: 2},
    {day: 'Thursday', id: 4},
    {day: 'Sunday', id: 0},
    {day: 'Friday', id: 5},
    {day: 'Monday', id: 1},
    {day: 'Saturday', id: 6},
    {day: 'Wednesday', id: 3}
]

// console.log(daysOfWeek.sort((a, b) => b.id - a.id))

// #endregion


// Sidenote:
// Using a regular for loop:
// const names = ['Warren', 'James', 'Peter']

// for (let i = 0; i < names.length; i++) {
//     console.log(`${i}: ${names[i]}`)
// }


// #region Sidenote on Dates

// const today = new Date(2026, 0, 10) // '10 January 2026'

// console.log(today.getFullYear()) // 2026
// console.log(today.getMonth()) // 03
// const months = [
//     'January',
//     'February',
//     'March',
//     // ...
// ]
// console.log(today.getDate()) // 04

// console.log(today.getDay()) // Wednesday

// console.log(months[0])
// #endregion