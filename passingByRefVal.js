// What happens to pieces of data when we pass them into functions
// Do the original variables change or stay the same?

// PRIMITIVES (passed by VALUE) & NON-PRIMITIVES (passed by REFERENCE)

// #region BY VAL

const myName = "Warren" // immutable    -> Stored in memory slot A
let myMiddleName = "Thomas" // mutable  -> Stored in memory slot B

function changeData(theName) { //       -> Stored in memory slot C
    theName += " West"
    return theName
} //                                    -> memory slot C is emptied

const result1 = changeData(myName) //  -> memory slot D
const result2 = changeData(myMiddleName) // memory slot E

console.log(myName) // "Warren"
console.log(myMiddleName) // "Thomas"

console.log(result1) // "Warren West"
console.log(result2) // "Thomas West"

// #endregion

// #region BY REF

const batman = { realName: "Bruce Wayne", sidekick: "Robin" } // memory slot A
const superman = { realName: "Clark Kent", sidekick: "Louis Lane" } // immutable (not unchangeable)

// superman = { realName: "Bruce Banner", sidekick: undefined } // Error
superman.realName = "Warren West"
superman.sidekick = undefined
superman.girlfriend = "Louis Lane"

// batman = superman // Breaks the rules of immutability

console.log(superman) // ?

function changeAnObject(anObject) { // memory slot A
    anObject.realName = "Clark Kent"
    anObject.isMarried = false
}

changeAnObject(batman) // memory slot A

console.log(batman.realName) // "Clark Kent"
console.log(batman.sidekick) // "Robin"
console.log(batman.isMarried) // ?
// #endregion

// #region BY REF part 2:

let volvo = { color: "Blue", numWheels: 4, isAutomatic: true } // mem A
let tesla = volvo // mem A
let honda = { ...volvo } // spread operator [...] {...}           mem B

console.log(honda.color) // "Blue"
console.log(volvo.color) // "Blue"

honda.color = "Red"

console.log(honda.color) // "Red"
console.log(volvo.color) // "Blue"

// alternative way of accessing object properties
console.log(volvo["isAutomatic"]) // Treating this object.property like array[index]
volvo["heatedSeats"] = "Front heated seats"
console.log(volvo["heatedSeats"]) // ?

// #endregion