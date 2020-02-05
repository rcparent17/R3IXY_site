var elements = document.getElementById('links');
var bodyRef = document.getElementById('body');

var logo = document.getElementById('logo');
logo.style.display = "block";
logo.style.marginLeft = "auto";
logo.style.marginRight = "auto";


var listen = document.getElementById('listentext');
listen.style.display = "block";
listen.style.marginLeft = "auto";
listen.style.marginRight = "auto";

var links = elements.querySelectorAll('a');
var images = elements.querySelectorAll('img');

var onMobile = window.innerHeight > window.innerWidth;

if (onMobile) {
  logo.style.width = "40%";
}
else{
  logo.style.width = "15%";
  listen.style.fontSize = "2vw";
}

for (var i = 0; i < links.length; i++) {
  if (onMobile) {
    bodyRef.appendChild(links[i]);
    bodyRef.appendChild(document.createElement("br"));
    bodyRef.appendChild(document.createElement("br"));
    bodyRef.appendChild(document.createElement("br"));
  }
  else {
    images[i].style.width = "14%";
    bodyRef.appendChild(links[i]);
    if (i==2){
      bodyRef.appendChild(document.createElement("br"));
      bodyRef.appendChild(document.createElement("br"));
      bodyRef.appendChild(document.createElement("br"));
    }
  }
}
