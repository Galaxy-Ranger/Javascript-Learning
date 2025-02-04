//? Promise Syntax
let promise1 = new Promise(function(resolve, reject) {
  console.log("Promise - 1 state is Pending")
  setTimeout(function() {
    resolve('Promise - 1 State is resolved successfully');
  }, 2000);
})

let promise2 = new Promise(function(resolve, reject) {
  console.log("Promise - 2 state is Pending")
  setTimeout(function() {
    reject('Promise - 2 State is rejected due to error');
  }, 2000);
})


//? .then() ---> to get the result/value
promise1.then(function(value) {
  console.log(value);
})

//? .catch() --> to get the error
promise2.catch(function(error) {
  console.log(error);
})

