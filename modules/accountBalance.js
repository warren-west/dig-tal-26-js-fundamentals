let balance = 0 // "hidden" or "private"

function deposit(value) {
    console.log("Earning wages")
    balance += value
}

function withdraw(value) {
    console.log("Paying bills")
    balance -= value
}

function getBalance() {
    return balance
}

// REVEALING MODULE PATTERN
// only export what you need to, on this object:
const accountObject = {
    deposit,
    withdraw,
    getBalance,
}
// everything else that you don't want to export
// is not part of this exported object
export default accountObject