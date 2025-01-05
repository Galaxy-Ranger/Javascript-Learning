const prompt = require("prompt-sync")();

// Q1 Create an array of numbers and take input from the user to add numbers to this array.
// const numsArr = []
// let isContinue = "Y"
// while (isContinue == "y" | isContinue == "Y") {
//     let userInput = prompt("Enter a number: ")
//     numsArr.push(Number.parseInt(userInput))
//     isContinue = prompt(`You want to contine Press "Y" OR else "N".`)
// }
// console.log(numsArr)


// Q2 Keep adding numbers to the array in Q1 utill 0 is added to the array.
const numsArr = []
while (true) {
    let userInput = prompt("Enter a number: ")
    userInput = Number.parseInt(userInput)
    numsArr.push(userInput)
    if(userInput == 0) {
        break;
    }
}
console.log(numsArr)
// console.log(typeof numsArr[-1]) // yeh undefined dega because js me array memory me as an object store hota hai so -1 index yaha pe key ki tarah act kar raha hai.


// Q3 filter a given array based on number divisible by 10?
let array = [45,78,12,10,90,71,80,100]
let divisibleBy10 = (element) => {
    return (element % 10 == 0)
}
console.log(array.filter(divisibleBy10))


// Q4 Create an array of square of given number.
let square = (element) => {
    return element * element
}
let squaredArr = array.map(square)
console.log(squaredArr)


// Q5 Use reduce to calculate factorial of a given number from an array of first n natural numbers (take n as an input)?
let n = prompt("Enter the value of n: ")
const naturalArr = []
for(let i=0; i<n; i++) {
    naturalArr[i] = i+1
}
console.log(naturalArr.reduce((accumulator, currentValue) => {return accumulator * currentValue}))