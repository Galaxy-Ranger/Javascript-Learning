let container = document.body.getElementsByClassName('container')
console.log(container)
// container = Array.from(container)

let tableNode = container[0].firstElementChild
console.log(tableNode)

//* table.rows - collection of tr elements
let rows = tableNode.rows
console.log(rows)


console.log(typeof document)
console.log(typeof window)