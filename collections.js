// Collections (arrays) are non-primitives
// const mixedArray = [ 5, true, "text", { name: "anObject" }, [ 1, 2, 3 ], false, -10, undefined ]
// console.log(mixedArray)

//               0, 1,  2, 3, 4,   5,  6, 7
const numbers = [5, 13, 8, 4, -13, -4, 0, 15] // temperatures
// console.log(numbers)

// console.log(numbers.length) // 8 elements in the array

// indexes in JavaScript are 0-based
// console.log(numbers[0]) // 5
// console.log(numbers[1]) // 13

// Helper functions to utilize arrays:

// #region Add / Remove

// Push & Pop (stack LIFO):
numbers.push(40) // NB*
// console.log(numbers)

const poppedElement = numbers.pop()
// console.log(numbers)
// console.log(poppedElement)

// Shift & Unshift (queue FIFO):
numbers.unshift(22)
// console.log(numbers)
const shiftedElement = numbers.shift()

console.log(numbers)
// console.log(shiftedElement)

// #endregion


// Slice & Splice:

// const middleElements = numbers.slice()
// console.log(middleElements) // [ 8, 4, ..., 15 ]


// REF & VAL with Arrays:

// #region Slice & Splice

// make a shallow copy with .slice()
const clonedArray = numbers.slice() // mem slot A, mem slot B

// console.log(numbers)
// console.log(clonedArray)


clonedArray.push(null)

// console.log(numbers)        // ?
// console.log(clonedArray)    // ?

// Splice: Very similar to slice(), except you remove from the original array

const ocean = [ '🐟', '🐠', '🐟', '🦈', '🐟', '🐟', '🐟' ]

const fishCollection = ocean.splice(0, 3)
const secondFishCollection = ocean.splice(1)

// console.log(fishCollection)
// console.log(ocean)
// console.log(secondFishCollection)

// #endregion

// #region Dealing with nested elements in an array:
const nestedArray = [
    1,
    2,
    [
        1,
        2,
        3,
        [9, 8, 7]
    ], [
        4,
        5,
        6,
        [9, 8, 7]
    ],
    [
        7,
        8,
        9,
        [9, 8, 7]
    ]
]

const copy = nestedArray.slice() // spread operator
console.log(copy)

// #endregion

// how to reverse an array:
// console.log(numbers.reverse())


// .join() & .split()

const pattern = "xoxoxoxoxoxox"

const splitString = pattern.split('')
console.log(splitString)

const result = splitString.join('')
console.log(result)