
function clickFunction(){
  document.getElementById("Story").style.fontSize = "50px";
}
function HidePic(){
  document.getElementById("Picture").style.visibility="hidden";
}
function ShowPic(){
  document.getElementById("Picture").style.visibility="visible";
}
function OpenDocument(){
  window.open("http://www.nlb.gov.sg/readsingapore/wp-content/uploads/2013/06/The-Paper-Menagerie.pdf", "_parent");
}
function Done(){
  window.close();
}
function Dark(){
  document.getElementById("Website").style.color= "#ffffff";
  document.body.style.backgroundColor= "#000000";
  document.getElementById("Title").style.color="#ffffff";
}
function Light(){
  document.getElementById("Website").style.color= "#000000";
  document.body.style.backgroundColor = "#ffffff"
  document.getElementById("Title").style.color="#000000";
}
