//? Instance Method (Non-Static Methods)

//* at() - it take an index and return the corresponding character. This method allows for positive and negative integers. Negative integers count back from the last string character.
let str = "Surya Pratap Singh"
console.log(str.at(4))

//* startsWith() -  determines whether this string begins with the characters of a specified string, returning true or false as appropriate.
let name = "Surya Pratap Singh"
console.log(name.startsWith('S'))

//* endsWith() - determines whether a string ends with the characters of this string, returning true or false as appropriate.
console.log(name.endsWith('h'))

//* includes() - performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate.
let sentence = "The quick brown fox jumps over the lazy dog."
let word = "fox"
console.log(sentence.includes(word) ? "exists" : "not exists")

//* indexOf() - searches this string and returns the index of the first occurrence of the specified substring.
console.log(`${word} is at ${sentence.indexOf(word)} index.`)