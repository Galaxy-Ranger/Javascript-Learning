// Q1 Write a program to show different alerts when different buttons are clicked.
let btnDiv = document.getElementById("btn-wrapper")
btnDiv = Array.from(btnDiv.children)

for(let btn in btnDiv) {
    btnDiv[btn].addEventListener('click', () => {
        onclick = alert(`Your Click Button - ${Number(btn) + 1}.`)
    })
}

// Q2 Create a website which is capable of storing bookmarks of your favourite websites using href.
let bookmarksDiv = document.getElementById("bookmark-wrapper")
arrayDuv = Array.from(bookmarksDiv.children)
const bookmarks = {
    '0': "https://www.google.com", 
    // relative path nhi dena hai werna error aayegi like this www.google.com yeh change hoke yeh ban jayega file:///C:/Users/surya/Desktop/www.google.com
    '1': "https://www.fb.com",
    '2': "https://www.twitter.com"
}
// for(let a in bookmarksDiv.children) {
//     bookmarksDiv.children[a].href = bookmarks[a]
// }

// Q3 Repeat Q2 using event listener.
for(let a in bookmarksDiv.children) {
    bookmarksDiv.children[a].addEventListener('click', () => {
        bookmarksDiv.children[a].href = bookmarks[a]
    })
}

// Q4 Write a javascript program to keep fetching contents of a website (every 5 seconds). {You need to know the aync await concepts.}


// Q5 Create a glowing bulb effect using classList toggle method in javascript.
