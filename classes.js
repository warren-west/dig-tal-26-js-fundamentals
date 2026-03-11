// We use Pascal Casing for the names of classes in JavaScript
class Student {
    // properties
    name = "Warren"
    surname = "West"

    // methods
    displayName() {
        return `My name is ${this.name} ${this.surname}` // note: "this"
    }
}

const warren = new Student()

console.log(warren)
console.log(warren.name)
console.log(warren.surname)
console.log(warren.displayName())


// Remember Functional Constructors?
// classes are just FCs in disguise 🥸
// function Animal(name) {
//   this.name = name
// }