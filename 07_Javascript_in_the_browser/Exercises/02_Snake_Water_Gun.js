// Use js to crate a game of snake,water and gun. The game should ask you to enter either S, W, or G. The computer should be able to randomly generate S, W or G and declare win or lose using alert.
// Use confirm or prompt whenever required.

let isRulesAccepted = confirm("Rules: Snake win over Water, Water win over Gun and Gun win over Snake.")

if(isRulesAccepted) {
    game();
} else {
    alert("Game Terminate...")
    if(confirm("You want to continue, Hit Ok else Cancel..") == true) {
        // let bot = 'S'
        // let P1 = prompt("Pick any one thing. S: Snake, W: Water, G: Gun..").toUpperCase()
        game();
    }
}

function game() {
    let computer = 'S'
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
        } else if(player != 'S' && player != 'W' && player != 'G') {
            alert("Please Enter from the given option.")
        } else {
            alert("Horray, You Win this Round.")
            winCounter++
        }
        if(confirm("If you want to continue, hit OK else Cancel..")) {
            computer = 'S'
            player = prompt("Pick any one thing. S: Snake, W: Water, G: Gun..").toUpperCase()
            round++
        } else {
            break;
        }
    }
    alert(`You win total ${winCounter} matches. So your points is: ${winCounter*10}.`)
}