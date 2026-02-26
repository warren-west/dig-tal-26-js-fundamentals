// We use different kinds of loops to iterate over collections in JavaScript.
// There are 5 mains types of loops, each with a specific purpose.

// 1. A simple for loop:
const days = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" ]

// 3 parts of the loop we should configure:
// a) iterator variable (i)
// b) the condition enabling the loop to continue
// c) how to increment i
for (let i = 3; i < days.length; i++) {
    // do stuff with each element here
    // console.log(`${i}: ${days[i]}`)
}

for (let i = days.length - 1; i >= 0; i--) {
    // console.log(`${i}: ${days[i]}`)
}

for (let i = 0; i < days.length; i += 2) {
    // console.log(`${i}: ${days[i]}`)    
}

// 2. A for...of loop - used to iterate through elements in an array
let count = 0
for (let day of days) {
    // console.log(`${count}: ${day}`)
    count++
}

// 3. A for...in loop - used to iterate through properties of an object

const person = { fullname: "Warren West", age: 33, key: '🔑' }

for (let key in person) {
    // console.log(`${key}: ${person[key]}`) // Use [ ] syntax to access properties from an object, in a loop
}

// 4. While loop (the focus is on the loop condition):
count = 0
while (count < 5) {
    // ⚠️ Watch out for infinite loops!
    // console.log(count)
    count++
}

// 5. do...while is the only post-test loop that exists:
count = 0
do {
    // console.log(`executing the loop`)
    count++
} while (count > 5) //  the condition is evaluated at the end of the loop body
// This loop will ALWAYS execute at least once.


// A PRACTICAL EXAMPLE USING DO...WHILE:

// Prompt the user for words, until they enter
// "q" for "quit".
// Store the list of words in an array
let words = []
let currentWord

// console.log('Loop is about to start')
// do {
//     currentWord = prompt("Enter a word")
//     if (currentWord.toLowerCase() !== 'q') {
//         words.push(currentWord)
//     }
// } while (currentWord.toLowerCase() !== 'q')

// console.log('Loop has ended')

// console.log(words)