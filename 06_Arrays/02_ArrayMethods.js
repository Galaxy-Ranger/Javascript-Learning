//* toString() - returns a string representing the specified array and its elements.
let num = [1,2,3,4,5,6,7,8,9,0]
console.log("toString() method -", num.toString())

//* join() - returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
// console.log(num.join())  // default sepeartor is ,
console.log("join() method -", num.join('-'))

//* pop() - removes the last element from an array and returns that element. This method changes the length of the array.
console.log("popped element -", num.pop())
console.log("Original Array -", num)
8
//* push() - adds the specified elements to the end of an array and returns the new length of the array.
console.log("pushed element -", num.push(0))  // after added an element return the new length.
console.log("Original Array -", num)

//* shift() - removes the first element from an array and returns that element. This method changes the length of the array.
console.log("shifted element -", num.shift())
console.log("Original Array -", num)

//* unshift() - adds the specified elements to the start of an array and returns the new length of the array.
console.log("unshifted element -", num.unshift(1))
console.log("Original Array -", num)

//* concat() - is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
console.log(num.concat([11,12,13,14,15]))

//* sort() - sorts the elements of an array. The default sort order is ascending.
console.log([12,45,1,57,89,33].sort())

//* delete operator - removes properties/element from objects/array and creates holes in arrays without changing their length.
let num2 = [12,45,1,57,89,33]
delete num2[3]
console.log("Delete Operator does not effect the length of the array...", num2, num2.length)

//* splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
const months = ['Jan', 'March', 'April', 'June'];
console.log(months)
//? Syntax : splice(startIndex, deleteCount, elementToAdd)
console.log("Deleted Elements are -", months.splice(0,4,"July", "August", "September", "October"))   // it will return the deleted element array.
console.log("After Removing Prev Quater -", months)