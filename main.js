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

const results = {user: 0, even: 0, comp: 0}

function playRound(userSelect, compSelect){
    const us = userSelect.toLowerCase()
    document.getElementById("results").innerHTML = 
        "User choice " + us + ", computer choice " + compSelect
    if (us == compSelect){
        document.getElementById("results").innerHTML+="<br>Result: even"
        results.even++
    } else if (actNums[us] + 1 == actNums[compSelect]){
        document.getElementById("results").innerHTML+="<br>Result: Computer wins"
        results.comp++
    } else if (actNums[compSelect] + 1 == actNums[us]){
        document.getElementById("results").innerHTML+="<br>Result: User wins"
        results.user++
    } else {
        document.getElementById("results").innerHTML+= `<br>Result: ${compSelect > us ? 'User wins' : 'Computer wins'}`        
        compSelect > us ? results.user++ : results.comp++
    }
    document.getElementById("user").innerHTML = results.user
    document.getElementById("comp").innerHTML = results.comp
    document.getElementById("even").innerHTML = results.even

    if (results.comp == 5){
        document.getElementById("winner").innerHTML = "Winner is Computer"
    } else if (results.user == 5){
        document.getElementById("winner").innerHTML = "Winner is User"
    }
}

function playGame(){
    for (let i = 0; i < 5; i++){
        const us = prompt("Enter your selection")
        const cs = getComputerChoice()

        console.log(playRound(us, cs))
    }
    
}

// playGame()
