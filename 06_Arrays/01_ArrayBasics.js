let numsArr = [1,2,3,4,5]

console.log("Length of the array is:", numsArr.length)

// indices
// console.log(numsArr[0])
// console.log(numsArr[1])
// console.log(numsArr[2])
// console.log(numsArr[3])
// console.log(numsArr[4])

numsArr[5] = 6;  // we can assign a new value to a new index.
numsArr[0] = 'x'  // we can also reassign new value to an existing index (which is not possible in a string).
// Arrays are mutable in nature.

// Looping on Array
for(let x of numsArr) {
    console.log(x)
}

for(let i in numsArr) {
    console.log(numsArr[i])
}