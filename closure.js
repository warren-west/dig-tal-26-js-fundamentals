// What is a closure?
// Simply, it's a function within a function.
// A function that returns another function.
// global scope

function outerFunction(message) {
    // scope A
    
    function innerFunction() {
        // scope B
        console.log(message)
    }

    return innerFunction
}


// const result = outerFunction("Hello from the global scope!") // "Hello from the global scope!" in the console
// result() // the context of the outerFunction is preserved for this to execute


function bank(initialAmount) {
    // Initializing the bank account balance
    let balance = initialAmount
    console.log(`Initialized bank: ${balance}`)

    // Methods:
    function deposit(amount) {
        balance += amount
    }

    function withdraw(amount) {
        balance -= amount
    }

    function printBalance() {
        console.log(`Balance: ${balance}.00 kr.`)
    }

    // Because we want to return multiple functions from this closure,
    // we can wrap all the return functions in an object
    // and use the object later
    return {
        depositFunctionality: deposit,
        withdrawFunctionality: withdraw,
        printBalanceFunctionality: printBalance,
    }
}

const bankObject = bank(100)
bankObject.depositFunctionality(50)
bankObject.printBalanceFunctionality()
bankObject.withdrawFunctionality(20)
bankObject.depositFunctionality(80)
bankObject.printBalanceFunctionality()