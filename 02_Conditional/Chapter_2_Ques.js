const prompt =  require("prompt-sync")();  // ignore this line

// Q1 Use logical operator to find whether the age of a person lies between 10 and 20?

let age = prompt("Enter your age: ")
if (age >= 10 && age <= 20) {
    console.log("It lies.")
} else {
    console.log("Not lies.")
}

// Q2 Demonstrate the use of switch case statements in js.

let day = prompt("Enter day name: ")
day = day[0].toUpperCase() + day.slice(1)  // there is no inbuild string method to convert the string into capitalize string.
// console.log(day)
switch(day) {
    case "Monday": console.log("Day is Monday.")
    break;
    case "Tuesday": console.log("Day is Tuesday.")
    break;
    case "Wednesday": console.log("Day is Wednesday.")
    break;
    case "Thursday": console.log("Day is Thursday.")
    break;
    case "Friday": console.log("Day is Friday.")
    break;
    case "Saturday": console.log("Day is Saturday.")
    break;
    case "Sunday": console.log("Day is Sunday.")
    break;
    default: console.log("Invalid Day Name.")
}

// Q3 Write a js program to find whether a number is divisible by 2 and 3 ?

let number = prompt("Enter a number: ")
if ((number % 2 == 0) && (number % 3 == 0)) {
    console.log("Number is divisible by both 2 and 3.")
}else {
    console.log("Number is not divisible by both 2 and 3.")
}

// Q4 Write a js program to find whether a number is divisible by either 2 or 3 ?

let n = prompt("Enter a n: ")
if ((n % 2 == 0) && (n % 3 != 0)) {
    console.log("n is divisible by only 2.")
} else if ((n % 2 != 0) && (n % 3 == 0)) {
    console.log("n is divisible by only 3.")
}

// Q5 Print "You can drive" and "You can not drive" based on age being greater than 18 using ternary operator.

let umar = prompt("Enter your age: ")
console.log("You can", (umar > 18 ? "drive" : "not drive"))