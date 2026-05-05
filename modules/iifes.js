// IIFE - Immediately Invoked Function Expression
const person = (function initializePerson(name, height, age) {
    const retirementAge = 67 - age // secret / hidden field that's not exported
    return {
        displayName() {
            return `I am ${name}.`
        },
        displayAge() {
            return `I'm ${age} years old.`
        },
        displayAllDetails() {
            return `I'm ${name}. I'm ${age} years old, and I am ${height}cm tall.`
        },
        displayRetirementAge() {
            return `I will retire in ${retirementAge} years.`
        }
    }
})("Warren", 178, 33) // <- this is using an IIFE

export default person

console.log(person.retirementAge) // undefined
console.log(person.displayAge())
console.log(person.displayRetirementAge())
console.log(person.displayAllDetails())