// Rock - 0
// Paper - 1
// Scissors - 2

function getComputerChoice(){
    let num = Math.floor(Math.random() * 3)

    switch (num) {
        case 0:
            return 'Rock'
        case 1:
            return 'Paper'
        default:
            return 'Scissors'
    }
}