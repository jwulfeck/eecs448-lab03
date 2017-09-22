var currentImage = 1;
function previous(){
  var image = document.getElementById("imagePane");
  if (currentImage ==1){
    currentImage = 5;
  }
  else{
    currentImage = (currentImage-1);
 }
  var nextImage = "image" + currentImage.toString() +".jpg";
  image.src = nextImage;
}

function next(){
  var image = document.getElementById("imagePane");
  if (currentImage == 5){
    currentImage = 1;
  }
  else{
    currentImage = (currentImage+1);
 }
  var nextImage = "image" + currentImage.toString() +".jpg";
  image.src = nextImage;
}
