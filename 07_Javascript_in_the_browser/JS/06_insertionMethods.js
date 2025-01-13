let div = document.body.getElementsByClassName('container')[0]
let h4 = document.createElement("h4")

div.append(h4)
// div.prepend(h4)

// div.before(h4)
// div.after(h4)


document.body.getElementsByTagName('h4')[0].innerHTML = "I am a h4 tag (inner div)"
// div.getElementsByTagName('h1')[0].replaceWith(h4)