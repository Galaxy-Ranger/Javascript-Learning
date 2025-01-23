// Write a javascript program to generate a random number and store it in a variable. The program then takes an input from the user to tell him whether the guess number was correct, greater or lesser than the original number.
// 100 - (number of guesses) is the score of the user. The program is expected to terminate once the number is guessed. Number should be in between 1 - 100.

const prompt = require("prompt-sync")();
const randomNum = Number.parseInt(Math.random() * 100) + 1
// console.log(randomNum)
let guessedNum;
let guessCount = 0;

do {
    guessedNum = prompt("Enter Your Guess 1 - 100: ")
    guessedNum = Number.parseInt(guessedNum)
    guessCount++
    if(guessedNum > randomNum) {
        console.log("Your Guessed Number is Greater than Actual Number.")
    } else if (guessedNum < randomNum) {
        console.log("Your Guessed Number is Lesser than Actual Number.")
    }

} while(randomNum != guessedNum);

if(guessedNum == randomNum) {
    console.log("Horray!! You Got this. Congratulation :)")
    console.log(`You took ${guessCount} guess, So your score is: ${100 - guessCount} Point.`)
}