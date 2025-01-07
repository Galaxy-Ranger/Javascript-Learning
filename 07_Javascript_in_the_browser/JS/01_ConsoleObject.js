//* Console Object Methods

// assert() - Log an error message to console if the first argument is false.
const errorMsg = "the # is not even";
for (let number = 2; number <= 5; number++) {
  console.log(`the # is ${number}`);
  console.assert(number % 2 === 0, number, errorMsg);
}
// output:
// the # is 2
// the # is 3
// Assertion failed: {number: 3, errorMsg: "the # is not even"}
// the # is 4
// the # is 5
// Assertion failed: {number: 5, errorMsg: "the # is not even"}


// clear() - Clear the console.
// info() - Outputs a message to the console with the info log level.
// error() - Outputs a message to the console with the error log level.
// warn() - Outputs a message to the console with the warning log level.


// table() - Displays tabular data as a table.
// Syntax: console.table(data, columns)  // column is optional

// an array of strings
console.table(["apples", "oranges", "bananas"]);