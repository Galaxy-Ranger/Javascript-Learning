//* Basic Loop
let num = [3, 5, 1, 4, 8]

for(let i=0; i<num.length; i++) {
    console.log(num[i])
}

//* forEach() Loop - executes a provided function once for each array element.
num.forEach((element) => {
    console.log(element * element)
})

//* Array.from() - static method creates a new, shallow-copied Array instance from an iterable or array-like object.
let name = "Surya Pratap Singh"
console.log(Array.from(name))

//* for..of Loop
for(let value of num) {
    console.log(value)
}

//* for..in Loop
for(let idx in num) {
    console.log(num[idx])
}