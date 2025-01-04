// Ques-1 What wii the following print in javascript "console.log("har\"".length)".
console.log("har\"".length)

// Ques-2 Explore the includes(), startsWith() and endsWith() string functions.
// refer 02_stringMethods.js file

// Ques-3 Write a program to convert a given string to lowercase.
const prompt = require("prompt-sync")();

let name = prompt("Enter Your Name: ")
console.log("Your name in Lowercase is:", name.toLowerCase())

// Ques-4 Extract the amount out of the string "Please give Rs1000".
let str = "Please give Rs1000"
console.log(str.slice(-4))

// Ques-5 Try to change 4th character of a given string were you able to do it?
let givenStr = prompt("Enter Something: ")
console.log(givenStr.replace(givenStr.charAt(4), 'a'))