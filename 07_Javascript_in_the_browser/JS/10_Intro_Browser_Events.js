// Mouse Events

// 1. onclick
let divEle = document.getElementById('BOM')
divEle.onclick = () => {
    console.log("I left click on this div element.")
}

// 2. oncontentmenu
divEle.oncontextmenu = () => {
    console.log("I right click on this div element.")
}

// 3. onmouseover
divEle.onmouseover = () => {
    console.log("Mouse over on this div element.")
}

// 4. onmousemove
divEle.onmousemove = () => {
    console.log("Mouse move on this div element.")
}

// play around other functions as well....