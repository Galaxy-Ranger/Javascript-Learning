// p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('Promise 1 resolved');
//     resolve();
//   }, 2000);
// })

// p2 = p1.then(() => {
//   console.log('Promise 1 then block run.');
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('Nested Promise 2 resolved');
//       resolve();
//     }, 2000);
//   })
// })

// p2.then(() => {
//   console.log('Nested Promise 2 then block run.');
// })

//* this is one way to write the promise chain together

// p1.then(() => {
//   console.log('Promise 1 then block run.');
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('Nested Promise 2 resolved');
//       resolve();
//     }, 2000);
//   })
// }).then(() => {
//   console.log('Nested Promise 2 then block run.');
// })

//* another way to write the promise chain together

//! Quick Quiz Write the loadscript function we wrote in the beginning of this chapter using promises.


function loadScript(src) {
  return new Promise((resolve, reject) => {
      let script = document.createElement('script');
      script.src = src;
      document.body.appendChild(script)
      script.onload = () => {
        resolve(src)
      }
      script.onerror = () => {
        reject(new Error(`Script load error for ${src}`))
      }
    })
}

loadScript('https://cdnxyzjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.min.js').then((value) => {
  console.log(`Script ${value} loaded successfully`);
}).catch((error) => {
  console.log(error);
})