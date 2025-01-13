document.body.prepend(document.createElement('div'))
let div = document.body.getElementsByTagName('div')[0]

// beforebegin
div.insertAdjacentHTML('beforebegin', '<p>I am a paragraph inserted before beginning of the div.</p>')

// beforeend
div.insertAdjacentHTML('beforeend', '<p>I am a paragraph inserted before end of the div.</p>')

// afterbegin
div.insertAdjacentHTML('afterbegin', '<p>I am a paragraph inserted after beginning of the div.</p>')

// afterend
div.insertAdjacentHTML('afterend', '<p>I am a paragraph inserted after end of the div.</p>')