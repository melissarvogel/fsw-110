function navbar()
{
  var links = document.getElementById('theNav').getElementsByTagName("a");
  var current= location.href;
  for (var i = 0; i < links.length; i ++)
  {
   if(links[i].href === current)
   {
      links[i].href = "";
   }
 }
} 


var newTitleText= document.createElement("h1")
newTitleText.textContent = "This JS site also has a NavBar"
var title = document.getElementById("theTitle")
title.prepend(newTitleText)

var newParagraph = document.createElement("p")
newParagraph.textContent = "I'm not sure if I did this right"
document.body.append(newParagraph)

var newList = document.createElement("li")
newList.textContent = "For some reason"
newList.textContent = "I can't get the"
newList.textContent = "Entire list to show up"
var list = document.getElementById("theList")
theList.append(newList)

var newFooter = document.createElement("footer")
newFooter.textContent = "I hope the footer works, though"
var thefooter = document.getElementById("theFooter")
thefooter.append(newFooter)