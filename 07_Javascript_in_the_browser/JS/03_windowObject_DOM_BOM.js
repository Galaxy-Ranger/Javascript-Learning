//* DOM Example

// document.body.style.backgroundColor = "red"

//* BOM Example

// location.href = "https://www.codewithharry.com"   // It will redirect to the code with harry website.


//! Note: to better get the output we need to know element only navigation
// childNodes ---> childElementNodes
// firstChild ---> firstElementChild
// lastChild ---> firstElementChild
// nextSibling ---> nextElementSibling
// previousSibling ---> previousElementSibling


//* child node - element that are direct children
let children = document.body.childNodes
console.log(children)  // yeh NodeList type return karega joki array nhi hota hai aur ispe array's method work nhi karenge
// second yeh saari nodes return karega jisme jaruri nhi node hamesha html tag hi ho like text node, comment node etc..

//* first child
let firstChild = document.body.firstChild
console.log(firstChild)

//* last child
let lastChild = document.body.lastChild
console.log(lastChild)

//* hasChildNode() - it will true if exists otherwise false.
let node = document.getElementsByClassName("noChild")
node = Array.from(node)
console.log(node[0].hasChildNodes())

//* nextSibling - body node is the next sibling of head,
let nextSibling = document.head.nextSibling
console.log(nextSibling)  // it will give the text node because it is considering space between head and body tag.

//* previousSibling - head node is the previous sibling of body,
let previousSibling = document.body.previousSibling
console.log(previousSibling)

//* What is the difference between parentNode and parentElement?
//* parentNode - tabhi return karega koi chiz ab wo node hai (koi bhi node text, comment etc.)
let parentNode = document.head.parentNode
console.log(parentNode)
//* parentElement - yeh tabhi return karega koi chiz jab wo valid html tag hoga (like div, span etc., not in case of text, comment or any other type of node because this is not a valid html tag.)
let parentElement = document.head.parentElement
console.log(parentElement)