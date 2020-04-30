let array = []
let player = "x"
let turno = 1
let element
let num

function next() {
    if (player == "o" && turno <= 8) {
        getRandomElement()
    }
}

function getRandomElement() {
    num = Math.round((Math.random() * 8))
    element = document.querySelector(`[data-key="${num}"]`)
    console.log(element)
    computerPlay()
}

function computerPlay() {

    if (element.classList.contains("x")) {
        getRandomElement()
    } else if (element.classList.contains("o")) {
        getRandomElement()
    } else {
        displayMark(element)
    }

}

function displayMark(element) {
    let dataKey = element.getAttribute("data-key")
    element.classList.add(player)
    array[dataKey] = player

    setTimeout(() => checkWinner(), 200)
}

function checkWinner() {

    if (areEqual(array[0], array[1], array[2]) ||
        areEqual(array[3], array[4], array[5]) ||
        areEqual(array[6], array[7], array[8]) ||

        areEqual(array[0], array[4], array[8]) ||
        areEqual(array[2], array[4], array[6]) ||

        areEqual(array[0], array[3], array[6]) ||
        areEqual(array[1], array[4], array[7]) ||
        areEqual(array[2], array[5], array[8])
    ) {
        alert(`Felicidades jugador ${player} has Ganado`)
        turno = 1
        location.reload()
    }

    if (turno == 9) {
        alert(`Empate`)
        turno = 1
        location.reload()
    }

    if (player == "x") {
        player = "o"

    } else if (player == "o") {
        player = "x"
    }

    turno++
    console.log(turno)
    next()

}

function areEqual() {
    let len = arguments.length
    for (let i = 1; i < len; i++) {
        if (arguments[i] == null || arguments[i] !== arguments[i - 1])
            return false
    }
    return true
}