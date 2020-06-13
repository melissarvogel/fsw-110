var newTitleText= document.createElement("h1")
newTitleText.textContent = "Welsome to my JS Website"
var title = document.getElementById("theTitle")
title.prepend(newTitleText)

var newParagraph = document.createElement("p")
newParagraph.textContent = "All of this was created in JavaScript"
document.body.append(newParagraph)

var newList = document.createElement("li")
newList.textContent = "At first it was difficult"
newList.textContent = "I think I get it now"
newList.textContent = "Maybe"
var list = document.getElementById("theList")
document.append(newList)
