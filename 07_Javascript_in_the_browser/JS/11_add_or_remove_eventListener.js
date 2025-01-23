// Event Listeners
let divElem = document.getElementById("BOMB");
let bombClick = () =>{
    onclick = console.log("BOMB is clicked...")
}
let bombMove = () =>{
    onmousemove = console.log("BOMB is Moved...")
}
// addEventListener
// Syntax - element.addEventListener(event, function, useCapture)  // useCapture - (optional) default is false.
// event	Required. // The name of the event. Do not use the "on" prefix. Use "click" not "onclick".
// complete DOM events list - https://www.w3schools.com/jsref/dom_obj_event.asp
divElem.addEventListener('click', bombClick)
divElem.addEventListener('mousemove', bombMove)

// removeEventListener
// Syntax - element.removeEventListener(event, function, useCapture)  // useCapture - (optional) default is false.
// function - function ka reference same hona chahiye jo addEventListener me diya gya hai werna work nhi karega
let btnEle = divElem.firstElementChild
btnEle.onclick = () => {
    divElem.removeEventListener('mousemove', bombMove)
}