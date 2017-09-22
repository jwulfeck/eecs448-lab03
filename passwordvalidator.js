function validate()
{
  var boxOne = document.getElementById("pw1Box");
  var boxTwo = document.getElementById("pw2Box");
  if(boxOne.value.length < 8){
    window.alert("Password must be at least eight characters long.");
  }
  else if (boxOne.value == boxTwo.value){
    window.alert("Password accepted.");
  }
  else{
    window.alert("Passwords are not the same.");
  }
}
