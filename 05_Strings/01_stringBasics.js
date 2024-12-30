let name = "Surya Pratap Singh" // this is the syntax of string uses.
console.log(name)

// for (let idx in name) {
//     console.log(name[idx])
// }

// Both loop works perfectly.

// for (let idx of name) {
//     console.log(idx)
// }

// Template Literal

let chachuName = "Neeraj Singh"
let nephewName = name
// let test = `this is template literal.`
let sentence = `${nephewName} is a nephew of ${chachuName}.`  // this is called string interpolation.
console.log(sentence)