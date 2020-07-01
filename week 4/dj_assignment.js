var buttonClick = document.getElementById("theSquare")

buttonClick.onClick = function(){
    document.body.style.backgroundColor = "blue";
}

buttonClick.onmousedown = function() {
    document.body.style.backgroundColor = "red";
}

buttonClick.onmouseup = function(){
    document.body.style.backgroundColor = "yellow";
}

buttonClick.ondblclick = function() {
    document.body.style.backgroundColor = "green";
}

buttonClick.onscroll = function() {
    document.body.style.backgroundColor = "orange";
}