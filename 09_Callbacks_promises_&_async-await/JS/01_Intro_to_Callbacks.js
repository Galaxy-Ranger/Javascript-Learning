// function loadscript(src, callback){
//   let script = document.createElement('script');
//   script.src = src
//   script.onload = callback()
//   document.body.appendChild(script)
// }
// src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
// function callback() {
//   alert("Script src loaded successfully")
// }
// loadscript(src, callback)


// Handling Error
function loadscript(src, callback){
  let script = document.createElement('script');
  script.src = src
  script.onload = function() {
    console.log("Script src loaded successfully")
    callback(null, src)
  }
  script.onerror = function() {
    console.log(`Error loading script: ${src}`)
    callback(new Error(`Error loading script`))
  }
  document.body.appendChild(script)
}
src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
function callback(error, src) {
  if (error){
    console.log(error)
    return
  }
  console.log(src)
}
loadscript(src, callback)