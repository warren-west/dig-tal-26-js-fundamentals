// A great way in JavaScript to create a "delay"
// or simulate a long and expensive task
// is by using the setTimeout() function.


console.log('1')
console.log('2')
setTimeout(() => {
    console.log("Wait for 2 seconds")
}, 2000) // milliseconds * 1000 = seconds
console.log('3')
console.log('4')
setTimeout(() => {
    console.log("Wait for 1 second")
}, 1000);
console.log('5')