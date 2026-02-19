// JS's initial attempt at OO was Functional Constructors
// What's a constructor?

// A constructor is a fancy word for:
// The function that executes when an object is created.

function Coffee(name, price) {
    this.name = name
    this.price = price
}

// When we've created a functional constructor, we can use the "new" keyword
const americano = new Coffee("Americano", 19.99)
const latte = new Coffee("Cafe Latte", 23.99)
const mocha = new Coffee("Mocha", 25.99)

console.log(americano)
console.log(latte)
console.log(mocha)

console.log(americano.name)
console.log(americano.price)

console.log(latte.name)
console.log(latte.price)

console.log(mocha.name)
console.log(mocha.price)