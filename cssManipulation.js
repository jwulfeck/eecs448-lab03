function changeStuff(){
  var text = document.getElementById("someText");
  var body = document.getElementById("body");
  var bgRed = document.getElementById("bgRed").value;
  var bgBlue = document.getElementById("bgBlue").value;
  var bgGreen = document.getElementById("bgGreen").value;
  var borderRed = document.getElementById("borderRed").value;
  var borderBlue = document.getElementById("borderBlue").value;
  var borderGreen = document.getElementById("borderGreen").value;
  var width = document.getElementById("widthVal").value;
  text.style.backgroundColor = rgb(bgRed, bgGreen, bgBlue);
  text.style.borderColor = rgb(borderRed, borderGreen, borderBlue);
  text.style.borderWidth = width;
}

function rgb(r, g, b){
  return "rgb("+r+","+g+","+b+")";
}
