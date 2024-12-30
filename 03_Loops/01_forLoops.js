// Factorial of n
const prompt = require("prompt-sync")();

let fact = 1;
let n = prompt("Enter a number: ")
n = Number.parseInt(n)

for(let i=1; i<=n; i++) {
    fact *= i;
}

console.log("Factorial of", n, "is:", fact)