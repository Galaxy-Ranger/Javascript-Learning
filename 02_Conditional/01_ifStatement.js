// if you want to convert string to number type then,

// let num = prompt("Enter a Number")
// to use prompt in node environment you have install prompt-sync ---- npm install prompt-sync then,

const prompt = require("prompt-sync")();  // you have to write this line
// The prompt-sync module is a function that creates prompting functions

let age = prompt("Enter your age: ")
age = Number.parseInt(age)

// console.log(typeof age)


if (age <= 0) {
    console.log("Invalid Age.")
} else if (age < 18 && age > 0) {
    console.log("You are a kid and don't even think about driving.")
} else {
    console.log("You can drive your age meet the driving license requirement.")
}