class Computer {
    // we're injecting mouse and keyboard into the constructor (CONSTRUCTOR INJECTION)
    constructor(mouse, keyboard) {
        this.CPU = "Intel"
        this.RAM = "16GB DDR3"
        // WE DON'T WANT CLASSES TO BE SO DEPENDANT ON EACH OTHER;
        // The Computer class is completely dependant on a CONCRETE instance of Mouse and Keyboard existing
        this.mouse = mouse
        this.keyboard = keyboard
    }
    
    getMouse() {
        return this.mouse
    }

    getKeyboard() {
        return this.keyboard
    }

    displayAllDetails() {
        return `CPU: ${this.CPU}\nRAM: ${this.RAM}\nMouse: ${this.mouse}\nKeyboard: ${this.keyboard}`
    }
}

class Mouse {
    constructor(brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year
    }
}

class Keyboard {
    constructor(brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year
    }
}

// CONCRETE vs ABSTRACT
// Concrete = an instance of an object in memory, with values assigned to it.

const logitechMouse = new Mouse("Logitech", "M-5500", 2026)
const logitechKeyboard = new Keyboard("Logitech", "L1200", 2024)
const dellPC = new Computer(logitechMouse, logitechKeyboard) // this is concrete

console.log(dellPC.displayAllDetails())