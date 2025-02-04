// Use js to crate a game of snake,water and gun. The game should ask you to enter either S, W, or G. The computer should be able to randomly generate S, W or G and declare win or lose using alert.
// Use confirm or prompt whenever required.
const obj = {
    1: 'S',
    2: 'W',
    3: 'G'
}
let isRulesAccepted = confirm("Rules: Snake win over Water, Water win over Gun and Gun win over Snake.")

if(isRulesAccepted) {
    game();
} else {
    alert("Game Terminate...")
    if(confirm("You want to continue, Hit Ok else Cancel..") == true) {
        game();
    }
}

function game() {
let computer = obj[Math.ceil((Math.random() * 3))]
    let player = prompt("Pick any one thing. S: Snake, W: Water, G: Gun..").toUpperCase()
    let winCounter = 0, round = 1
    while(round != 10) {
        if(player == 'S' && computer == 'G') {
            alert("You Lost this Round!!!")
        } else if(player == 'W' && computer == 'S') {
            alert("You Lost this Round!!!")
        } else if(player == 'G' && computer == 'W') {
            alert("You Lost this Round!!!")
        } else if(player == computer) {
            alert("Round Draw.")
            round--;
        } else if(player != 'S' && player != 'W' && player != 'G') {
            alert("Please Enter from the given option.")
            round--;
        } else {
            alert("Horray, You Win this Round.")
            winCounter++
        }
        if(confirm("If you want to continue, hit OK else Cancel..")) {
            computer = obj[Math.ceil((Math.random() * 3))]
            player = prompt("Pick any one thing. S: Snake, W: Water, G: Gun..").toUpperCase()
            round++;
        } else {
            break;
        }
    }
    alert(`You win total ${winCounter} matches. So your points is: ${winCounter*10}.`)
}