import account from "./modules/accountBalance.js"

// DOM ELEMENTS
const btnWages = document.getElementById("btn-wages")
const btnBills = document.getElementById("btn-bills")
const displayBalance = document.getElementById("display-balance")

// GLOBAL VARIABLES

// EVENT LISTENERS
btnWages.addEventListener("click", handleEarnWages)
btnBills.addEventListener("click", handlePayBills)

// EVENT HANDLERS
function handleEarnWages() {
    console.log("handleEarnWages")
    account.deposit(100)
    /// add some code
    renderNewBalance()
}
function handlePayBills() {
    console.log("handlePayBills")
    account.withdraw(25)
    /// add some code
    renderNewBalance()
}

// FUNCTIONS
function renderNewBalance() {
    console.log("The <p> tag was updated with the new balance")
    // update the contents of the <p> tag
    displayBalance.innerText = `Current Balance: $${account.getBalance()}.00`
}

// RUNTIME
renderNewBalance()