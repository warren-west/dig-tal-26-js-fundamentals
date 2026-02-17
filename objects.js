const simpleObject = { singleKey: "value" }

const myObject = {
    firstName: "Warren",
    lastName: "West",
    age: 32,
    isMarried: true, // a trailing comma
    gender: "Male",
}

let animal = {
    weight: 50,
    isCarnivore: true,
    emoji: "🦁",
    location: "Africa"
}

// "this" keywords provides disambiguation (we don't want to get muddled up between the properties of this object
// and other variables in the program)

const costPrice = 10

let product = {
    costPrice: 19.99,
    markupPerc: 120,
    description: "A can of soda",
    brand: "Generic Cola",
    stock: 20,
    hasSugarTax: true,
    // method / function
    printProductDetails: function () {
        console.log(`Brand: ${this.brand}\nDescription: ${this.description}\nStock: ${this.stock}`)
    },
    getSalesPrice: function() {
        return this.costPrice * this.markupPerc / 100
    },
    isInStock: () => this.stock > 0
}

// console.log(myObject)
// console.log(animal)
console.log(product)
console.log(product.costPrice)

console.log(product.isNew) // ? Error? No error? Undefined? Null? ""? false?

product.isNew = false
console.log(product.isNew) // ? Error? No error? Undefined? Null? ""? false?

product.printProductDetails()
console.log(product.getSalesPrice())

console.log(product.isInStock())

// #region Sidenote on primitives and non-primitives:
// These are primitive datatypes (values):
const firstname = "Warren"
const age = 33
const isMarried = true

// These are non-primitive datatypes:
const arrayOfNumbers = [ 1, 2, 3, 4, 5 ]
const tree = { name: "pine", isConiferous: true, color: "Green" }

// #endregion