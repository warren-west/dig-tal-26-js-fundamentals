// #region simple class syntax

// We use Pascal Casing for the names of classes in JavaScript
class Student {
    // constructor (a function that runs when an instance is created with the 'new' keyword):
    /**
     * Create a new Student object with firstName, lastName, and age parameters provided.
     * @param {String} firstName the Student's first name.
     * @param {String} lastName the Student's last name.
     * @param {Number} age the Student's current age.
     */
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    // properties

    // methods
    displayName() {
        return `My name is ${this.firstName} ${this.lastName}. I am ${this.age} years old.` // note: "this"
    }
}

const warren = new Student('Warren', 'West', 33)
const adam = new Student('Adam', 'Driver', 39)
const sophie = new Student('Sophie', 'Turner', 31)
// Sidenote: -> TypeScript: A language very similar to JS built by Microsoft to enforce strict types.

// console.log(warren)
// console.log(warren.firstName)
// console.log(warren.lastName)
// console.log(warren.age)
// console.log(warren.displayName())
// console.log(adam)
// console.log(adam.firstName)
// console.log(adam.lastName)
// console.log(adam.age)
// console.log(adam.displayName())
// console.log(sophie)
// console.log(sophie.firstName)
// console.log(sophie.lastName)
// console.log(sophie.age)
// console.log(sophie.displayName())


// Remember Functional Constructors?
// classes are just FCs in disguise 🥸
// function Animal(name) {
//   this.name = name
// }

// #endregion

// #region Privates

// defined the Product class (blueprint / template for creating Product objects)
// the PRIVATE properties and methods are ONLY AVAILABLE inside the class
class Product {
    // creating a private property
    #costPrice

    constructor(costPrice, markUp, name, stock) {
        this.#costPrice = costPrice
        this.markUp = markUp
        this.name = name
        this.stock = stock
    }

    #calculateSellingPrice() {
        return this.#costPrice * this.markUp
    }

    // this can be described as a "getter" method:
    getSellingPrice() {
        return `${this.name} costs ${this.#calculateSellingPrice()}.00 kr.`
    }

    // this can be described as a setter method:
    setName(newName) {
        this.name = newName
    }

    // this can be described as a setter method:
    addStockValue(newStock) {
        this.stock += newStock
    }
}

const keyboard = new Product(10, 1.5, "Nintendo Gaming Keyboard", 5)
const mouse = new Product(20, 2, "Nintendo Gaming Mouse", 25)

// console.log(keyboard.#costPrice)
// console.log(keyboard.#calculateSellingPrice())

// console.log(keyboard.getSellingPrice())
// console.log(mouse.getSellingPrice())

keyboard.setName("Xbox Gaming Keyboard")
keyboard.addStockValue(10)

// console.log(keyboard.name)
// console.log(keyboard.stock) // 15 in stock

// #endregion


// #region inheritance

class Animal {
    constructor(name, emoji, weight) {
        this.name = name
        this.emoji = emoji
        this.weight = weight
    }
    // properties

    // methods - generic implementation / behaviors
    displayAnimalDetails() {
        return `${this.emoji} I am ${this.name}, I weigh ${this.weight}.`
    }

    eat() {
        return `${this.emoji} is eating...`
    }
}


// This is a child class to Animal
class Lion extends Animal {
    constructor(name, emoji, weight, furColor) {
        // send the parameters that the (parent) Animal class requires to it
        super(name, emoji, weight)
        // set a property for the Lion class
        this.furColor = furColor
    }

    // more specific implementation / behaviors
    displayAnimalDetails() {
        return `${this.emoji} I am ${this.name}, I weigh ${this.weight}, and I have ${this.furColor} fur.`
    }

    run() {
        return `${this.emoji} is running...`
    }
}

// This is another child class to Animal
class Bird extends Animal {
    constructor(name, emoji, weight, featherColor) {
        super(name, emoji, weight)
        this.featherColor = featherColor
    }

    fly() {
        return `${this.emoji} is flying...`
    }
}


const simba = new Animal("Simba", "🦁", 150)
const zazu = new Animal("Zazu", "🦅", 3)


// console.log(simba.eat())
// console.log(simba.run()) these cause errors!
// console.log(simba.fly()) these cause errors!

const mufasa = new Lion("Mufasa", "🦁", 172, "Orange")
const parakeet = new Bird("Koko", "🦜", 2, "Red")

// console.log(mufasa.displayAnimalDetails())
// console.log(mufasa.eat())
// console.log(mufasa.run())

// console.log(parakeet.displayAnimalDetails())
// console.log(parakeet.eat())
// console.log(parakeet.fly())

// console.log(simba.displayAnimalDetails()) // Animal^
// console.log(zazu.displayAnimalDetails()) // Animal^
// console.log(mufasa.displayAnimalDetails()) // Lion*
// console.log(parakeet.displayAnimalDetails()) // Bird^

console.log(mufasa)
console.log(parakeet)
// #endregion

const number = new Number(42)
const boolean = new Boolean(false)
const word = new String("Hello world!")
const list = new Array([1, 2, 3, 4, 5])

const doubledNumbers = list.map((num) => num * 2)

console.log(number)
console.log(boolean)
console.log(word)
console.log(list)
console.log(doubledNumbers)