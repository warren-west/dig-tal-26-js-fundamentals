// how to use if...else statements
/*
const grade = 29

console.log("Before the if")

if (grade >= 75) {
    console.log("Distinction! ⭐") // ?
} else if (grade >= 50) {
    console.log("You passed 👍")
} else {
    console.log("You failed 🥲")
}

console.log("After the if")


*/

// const username = prompt("Enter Username")
// const password = prompt("Enter Password")
// const confirmPassword = prompt("Please confirm your password")


// Check that username and password aren't empty
// if (not) username -> if username is null / empty / undefined
// you can use double negation 
//  -> !!username 
//      -> username is not not null / undefined / empty
//           -> username has a value
// if (!username) {
//     console.log("Username cannot be null or empty!")
// } else {
//     console.log(`Username: ${username}`)
// }

// if (!password) {
//     console.log("Password cannot be null or empty!")
// } else {
//     console.log(`Password: ${password}`)
//     // This breaks the "never-nest" rule:
//     if (password !== confirmPassword) {
//         console.log("Passwords need to match!")
//     } else {
//         console.log("The passwords match 👍")
//     }
// }


// coercion engine
// let myUndefined = undefined
// let myNull = null
// let myEmpty = ""

// if (!!myUndefined) {
//     console.log("A")
// } else {
//     console.log("B")
// }

// JS Coercion engine coerces null / undefined / "" -> false

// switch...case statements

const favColor = prompt("Please enter your favorite color:")

// if red -> cherry
// if orange -> orange
// if yellow -> banana
// if green -> lime
// if blue -> blueberry
// if purple -> grape

switch (favColor.toLowerCase()) {
    case "red": {
        console.log("Cherry 🍒")
        break
    }
    case "orange": {
        console.log("Orange 🍊")
        break
    }
    case "yellow": {
        console.log("Banana 🍌")
        break
    }
    case "green": {
        console.log("Lime 🍋‍🟩")
        break
    }
    case "blue": {
        console.log("Blueberry 🫐")
        break
    }
    case "purple": {
        console.log("Grape 🍇")
        break
    }
    default: {
        console.log(`The color ${favColor} has no matching fruit...`)
        break
    }
}

// Ctrl + D