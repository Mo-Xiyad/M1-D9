
const createboard = function () {
    let bingoboard = document.getElementById("bingo-numbers")

    for (let i = 1; i <= 75; i++) {
        let create = document.createElement("div")
        create.innerHTML = i
        create.id = i
        // create.className.add('bingoboard')
        bingoboard.appendChild(create)

        //create.appendChild(bingoboard)
    }
}

const randomNumber = function () {
    let randomNumber = Math.floor(Math.random() * 74 + 1)
    return randomNumber
}

const createRandom = function () {
    let makeArandom = document.getElementById("display")
    makeArandom.innerHTML = randomNumber()
}

// const showRandomNumber = function () {
//     let makeArandom = document.getElementById("display")
//     makeArandom.innerHTML = randomNumber()
// }

const selectTheNumber = function () {
    let showNumber = document.getElementById("display")
    let numbers = randomNumber()
    showNumber.innerHTML = numbers
    document.getElementById(numbers).style.backgroundColor = "red"
}


window.onload = function () {
    createboard()
}
