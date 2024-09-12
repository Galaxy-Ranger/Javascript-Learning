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