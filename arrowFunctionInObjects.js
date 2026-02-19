const superHero = {
    // properties
    realName: "Bruce Wayne",
    alias: "Batman",
    superPower: "Super strength",

    // methods
    activatePower: function() {
        console.log(`${this.realName} used ${this.superPower}!`)
    },

    // arrow function as method (AVOID THIS)
    printSuperPower: () => console.log(`Some generic message. No "this" keyword.`)
}

superHero.printSuperPower() // ?✅


console.log(superHero.alias)
console.log(superHero.realName)

superHero.activatePower()

superHero.sideKick = {
    realName: "The Real Name of Robin",
    alias: "Robin",
    colors: "Green, yellow and red."
}

console.log(superHero.sideKick.alias) // Robin