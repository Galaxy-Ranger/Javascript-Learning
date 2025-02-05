let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 1 resolved')
  }, 2000)
})

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 2 resolved')
  }, 4000)
})

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Promise 2 resolved')
    reject('Promise 3 rejected')
  }, 6000)
})

//? Method 1: Promise.all([promises]) ---> // if we run Promise.all and if in case any one promise is rejected then Promise.all will not ran.
Promise.all([p1, p2, p3]).then((values) => {
  console.log(values)  // value
})

//? Method 2: Promise.allSettled([promises]) ---> doesn't matter if any one promise is rejected it will give the result of the resolved promises.
Promise.allSettled([p1, p2, p3]).then((values) => {
  console.log(values)   // status, value
})

//? Method 3: Promise.race([promises]) ---> it will return the result of the promise that resolves or rejects first.
Promise.race([p1, p2, p3]).then((value) => {
  console.log(value)  // value
})

//? Method 4: Promise.any([promises]) ---> it will return the result of the first promise that resolves.
Promise.any([p1, p2, p3]).then((value) => {
  console.log(value)  // value
})

//? Method 5: Promise.try(fn) ---> it will run the function passed as argument and if it throws an error, it will be caught and returned as a rejected promise.
Promise.try(() => {
  throw new Error('This is an error')
}).then((value) => {
  console.log(value)  // Error: This is an error
}).catch((error) => {
  console.log(error)  // Error: This is an error
})