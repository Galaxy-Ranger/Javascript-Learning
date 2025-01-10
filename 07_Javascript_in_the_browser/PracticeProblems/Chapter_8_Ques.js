// Q1 Create a navbar and change the color of its first element to red.
document.getElementsByTagName('nav')[0].firstElementChild.style.color = 'red'


// Q3 Create an element with three children Now change the color of first and last element to green.
document.getElementsByTagName('nav')[0].firstElementChild.style.color = 'green'
document.getElementsByTagName('nav')[0].lastElementChild.style.color = 'green'


// Q4 Write a javascript code to change background of all <li> tag to cyan.
let liTags = document.getElementsByTagName("li")
for(let element of liTags) {
    element.style.backgroundColor = "cyan"
}