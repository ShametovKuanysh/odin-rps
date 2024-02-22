// Rock - 0
// Paper - 1
// Scissors - 2

function getComputerChoice(){
    let num = Math.floor(Math.random() * 3)

    switch (num) {
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        default:
            return 'scissors'
    }
}

const actNums = new Map()
actNums['rock'] = 0
actNums['paper'] = 1
actNums['scissors'] = 2

function playRound(userSelect, compSelect){
    const us = userSelect.toLowerCase()
    console.log('User choice ', us)
    console.log('Computer choice ', compSelect)
    if (us == compSelect){
        return 'Even'
    } else if (actNums[us] + 1 == actNums[compSelect]){
        return 'Computer wins'
    } else if (actNums[compSelect] + 1 == actNums[us]){
        return 'User wins'
    } else {
        return compSelect > us ? 'User wins' : 'Computer wins'
    }

}

console.log(playRound('paper', getComputerChoice()))