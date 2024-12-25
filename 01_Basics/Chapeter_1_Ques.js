// Q1 Write a js program to store name, phone number and marks of a student using object.

const data = {
    name: "Surya",
    phoneNum: 1234567890,
    marks: 70
}

// Q2 Create a variable of type string and try to add a number to it.

let str = "hello"
console.log(str + 1)

// Q3 Use typeof operator to find the datatype of the string in last question.

console.log(typeof(str + 1))

// Q4 Create a const object in js. Can you change it to hold a number later?

const dummy = {
    a: 1,
    b: 2
}

// dummy = 10 // it will give an " assignment to constant" error.

// Q5 Try to add a new key to the const object in problem 4 were ypu able to do it?

dummy.c = 3
console.log(dummy.c)

// Q6 Write a js program to create a word meaning dictionary of 5 words.

const word_meaning = {
    "timid" : "abnormally distended especially by fluids or gas",
    "filigree" : "delicate and intricate ornamentation",
    "rubric" : "category name",
    "intemperance" : "excess in action and immoderate indulgence of appetites",
    "narcissist" : "someone who is excessively self-centered" 
}

for (word in word_meaning) {
    console.table([word, word_meaning[word]])
}