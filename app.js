let password = document.querySelector(".passwordText")
let passwordGeneratorButton = document.querySelector(".passwordGeneratorButton")
let letterNumber = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789"
let letter = ""
passwordGeneratorButton.addEventListener("click", passwordGenerator)
console.log(passwordGeneratorButton)
function randomNumber() {
    let randomNum = Math.floor(Math.random() * 61)
    return randomNum;
}
function passwordGenerator() {
    letter = ""
    for (let i = 0; i < 16; i++) {
        let returnNum = randomNumber()
        letter = `${letter}${letterNumber[returnNum]}`
    }
    password.textContent = letter
}