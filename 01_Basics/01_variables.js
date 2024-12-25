const accountId = 144553
let accountEmail = "surya@google.com"
var accountPassword = "212121"
accountCity = "Lucknow"   // don't use ever this is a really bad practice
let accountState

// accountId = 2  // not allowed

console.log(accountId);

/*
Prefer not to use var keyword
because of issue in block scope and functional scope
*/

console.table([accountEmail, accountPassword, accountCity, accountState])


// var keyword

// var can be updated and re-declared within its scope
var a = 'Hello'
var a = 'Surya'

var b;
console.log(b) // undefined

// comments shortcut

// ctrl + / ---> single line comment
// shift + alt + a ---> multi line comment