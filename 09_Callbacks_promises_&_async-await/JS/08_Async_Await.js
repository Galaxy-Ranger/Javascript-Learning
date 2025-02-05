//* haam kisi bhi function ko async kar sakte hai aur
//* uske baad uske andar promise ko await kar sakte hai

//? An async function always returns a promise
async function myFunction() {
  //? We can use await keyword inside an async function to wait for the promise to resolve
  //? Promises are resolved asynchronously, so this line of code will continue executing while the promise is pending
  const result = "Hello, Surya This is my promise"
  return result
}
myFunction().then((result) => {
  console.log('Data from the first API call:',result)
})

async function weatherData() {
  let delhiWeather = new Promise((resolve, reject) => {
    //? Simulating a delay of 5 seconds
    setTimeout(() => {
      //? If the API call is successful, resolve the promise with the weather data
      resolve({ city: 'Delhi', temperature: 30 })
    }, 5000)
  })
  let bangaloreWeather = new Promise((resolve, reject) => {
    //? Simulating a delay of 10 seconds
    setTimeout(() => {
      //? If the API call is successful, resolve the promise with the weather data
      resolve({ city: 'Bangalore', temperature: 21 })
    }, 10000)
  })
  console.log("Fetching delhi weather data please wait...")   // yeh shirf isliye log kiya jaa raha hai ki actual me await pause leta hai kya ek kaam ko finish karke dusre kaam ko start karne me.
  let delhiWeatherData = await delhiWeather
  console.log("Delhi weather data fetched")
  console.log("Fetching bangalore weather data please wait...")
  let bangaloreWeatherData = await bangaloreWeather
  console.log("Bangalore weather data fetched")
  return [delhiWeatherData, bangaloreWeatherData]
}

weatherData().then((weatherData) => {
  console.log('Weather data for Delhi:', weatherData[0])
  console.log('Weather data for Bangalore:', weatherData[1])
})

//* Two async functions runs in parallel