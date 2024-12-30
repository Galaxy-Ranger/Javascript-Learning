// Q1 Write a program to print the marks of a student in an object using for loop.
const studentMarks = {
    'Harry' : 98,
    'Rohan' : 70,
    'Aakash' : 71,
}
let totalKeys = Object.keys(studentMarks)
for(let i=0; i<totalKeys.length; i++) {
    console.log("Marks of", totalKeys[i], "is:", studentMarks[totalKeys[i]])
}


// Q2 Using for-in Loop
for(let name in studentMarks) {
    console.log("Marks of", name, "is:", studentMarks[name])
}


// Q3 Write a program to print "Try Again" until the user enters the correct number.
const prompt = require("prompt-sync")();
const actualNum = 56;
let option = 1
let userNum = prompt("Enter a number: ")
while(actualNum != userNum){
    console.log("Try Again!!!")
    console.log("Press 1 to Continue or Press 0 to Exit.")
    option = prompt()
    if(option == 1) {
        userNum = prompt("Enter a number: ")
    } else{
        option = 0
        break;
    }
}
if(option != 0) {
    console.log("Hurray, You Got it.")
}


// Q4 Write a function of find mean of 5 number.
let arr = [34, 54, 78, 23, 98]
function mean(arr) {
    let sum = 0, i = 0
    while (i < arr.length) {
        sum += arr[i]
        i++
    }
    return sum/arr.length;
}
console.log("Mean of 5 number:", mean(arr))