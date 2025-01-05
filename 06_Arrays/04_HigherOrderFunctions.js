//* map() - creates a new array populated with the results of calling a provided function on every element in the calling array.

// Syntax - arrName.map(value, index, array)    // forEach() loop ka bhi same syntax hai.
const array1 = [1, 4, 9, 16];
const array2 = [2, 6, 11, 13]

console.log("Value", "index", "Array1")
array1.map((value, index, array1) => {
    console.log(value, index, array1[index])
})

//* filter() - creates a shallow copy of a portion of a given array, filter an array with values that passes a condition.
const array3 = [12, 46, 76, 34, 11, 1, 4, 7]
let filteredArr = array3.filter((element) => {
    return element > 20
})
console.log(filteredArr)

//* reduce() - executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

// The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

const array4 = [1, 2, 3, 4]

// 0 + 1 + 2 + 3 + 4
const initialValue = 0
const sumWithInitial = array4.reduce((accumulator, currentValue) => {
    accumulator + currentValue, initialValue
})
console.log(sumWithInitial)   // Expected output: 10