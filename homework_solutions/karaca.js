function encrypt(input) {
    // let step1result = step1(input)
    // let step2result = step2(step1result)
    // let step3result = step3(step2result)

    // return step3result

    return step3(step2Alt(step1(input))) // nesting function calls
}

// helper functions
function step1(input) {
    const revString = input.split('').reverse().join('')
    // let revString = ""
    // for (let i = input.length - 1; i >= 0; i--) {
    //     revString += input[i]
    // }

    return revString
}

function step2(input) {
    const split = input.split('')
    let resultString = ""

    for (let c of split) {
        let lower = c.toLowerCase()

        // we check and deal with all vowels
        if (lower === 'i' || lower === 'o') resultString += '2'
        else if (lower === 'a') resultString += '0'
        else if (lower === 'e') resultString += '1'
        else if (lower === 'u') resultString += '3'
        else resultString += c
    }

    return resultString
}

function step2Alt(input) {
    const map = { a: '0', e: '1', i: '2', o: '2', u: '3' }
    // split the input into an array of characters
    let split = input.split('')
    let result = ""

    // loop through each character of the input string
    for (let c of split) {
        let lower = c.toLowerCase()
        result += map[lower] || c
    }

    return result
}

function step3(input) {
    return `${input}aca`
}

// Test cases:
console.log(encrypt("banana"))  // "0n0n0baca"
console.log(encrypt("karaca"))  // "0c0r0kaca"
console.log(encrypt("burak"))   // "k0r3baca"
console.log(encrypt("alpaca"))  // "0c0pl0aca"
console.log(encrypt("hello"))  // "2ll1haca"