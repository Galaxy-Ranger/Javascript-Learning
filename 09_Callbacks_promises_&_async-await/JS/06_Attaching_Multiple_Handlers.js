p1 = new Promise((resolve, result) => {
  resolve();
})

p1.then(() => {
  setTimeout(() => {
    console.log("Hello")
  }, 2000);
})

p1.then((result) => {
  setTimeout(() => {
    console.log("Surya")
  }, 4000);
})

p1.then((result) => {
  setTimeout(() => {
    console.log("Pratap")
  }, 6000);
})

p1.then((result) => {
  setTimeout(() => {
    console.log("Singh")
  }, 8000);
})