// Q1 Wrtie a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive?
let age = Number.parseInt(prompt("Enter Your Age.."))


// Q3 In the previous question, use console.error to log the error if the age entered is negative.
if(age < 1) {
    console.error("You entered the invalid age..")
} else {
    if(age > 18) {
        alert("Yes, you can drive.")
    } else {
        alert("No, you can't drive.")
    }
}


// Q2 In Q1 use confirm to ask the user if he wants to see the prompt again.
let ans = confirm("You want to see the prompt menu again..?")
if(ans) {
    age = Number.parseInt(prompt("Enter Your Age.."))
    if(age > 18) {
        alert("Yes, you can drive.")
    } else {
        alert("No, you can't drive.")
    }
}


// Q4 Write a program to change the url to "google.com" redirection, if user enters a number greater than 4.
// let num = Number.parseInt(prompt("Enter any Number.."))
// if(num > 4) {
//     location.href = "https://www.google.com"
// }
// window.open(
//     'https://support.wwf.org.uk/earth_hour/index.php?type=individual',
//     '_blank' // <- This is what makes it open in a new window.
//   );


// Q5 Change the background of the page to "yellow", "red" or any other color based on user input through prompt.
let range = Number.parseInt(prompt("Enter a number.. 1: Red, 2: Yellow, 3: Green, 4: Pink, 5: Any color u want..."))
switch (range) {
    case 1: document.body.style.backgroundColor = "Red";
            break;
    case 2: document.body.style.backgroundColor = "Yellow";
            break;
    case 3: document.body.style.backgroundColor = "Green";
            break;
    case 4: document.body.style.backgroundColor = "Pink";
            break;
    case 5: document.body.style.backgroundColor = prompt("Enter your choice of color.")
            break;
    default: document.body.style.backgroundColor = "Orange";
}