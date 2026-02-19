// What is lexical scoping?
// The visibility within your code.
// In JS we have separate code blocks for functions / conditional statements / loops / classes / objects...
// From within any given code block, we can we "see" (read), and what can't we?

// #region Lexical Scoping with LET and CONST variables

// Global variables (declared in the global scope):
let usedEverywhere = "I am available anywhere in this script."

// Scope A
const favNumber = 42

function functionScope() {
    // Scope B
    console.log(favNumber)
    
    const favString = "forty two"

} // favString variable is destroyed here by the GarbageCollector

// console.log(favString) // ReferenceError
functionScope() // 42

// #endregion

// #region Lexical Scoping with VAR variables:

{
    // Scope A
    {
        // Scope B
        const anotherVariable = "Test"
        var myVar = "Var" // var variables don't adhere to lexical scoping rules outside of functions
    }
    console.log(anotherVariable)
    console.log(myVar)
}

// #endregion