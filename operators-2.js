// ||=
// It's a little bit more common than the other one.
// Typical use case is using it for assigning an initial value to something,
// and avoiding an unnecessary second "re-assignment":

let emptyVariable = "" // "falsy" values like '', false, 0, null, undefined, [], {}
let fullVariable = "Has some value" // "truthy" values like 42, true, "Something"

// We want to assign a value to something that's "empty"
emptyVariable ||= "Starting value"
fullVariable ||= "Starting value"

// &&=
emptyVariable = ""

emptyVariable &&= "A new value"
fullVariable &&= "A new value"

console.log(emptyVariable) // ""
console.log(fullVariable) // "A new value"