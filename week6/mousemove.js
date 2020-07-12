function showcoordinates(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coordinates = "X coordinate: " + x + ", Y coordinate: " + y;
    document.getElementById("redbox").innerHTML = coordinates;
  }