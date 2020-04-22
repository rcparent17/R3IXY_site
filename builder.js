//author: Reilly Parent
// a bunch of functions used for the old version of the site, someone might find
// these helpful

// draw a group of link images: takes in: list of link elements, list of image
// elements, how many images per row (width), and the width of images on desktop
// and mobile
function drawGroup(links, images, width, desktopSize, mobileSize){
  for (var i = 0; i < links.length; i++) {
    if (onMobile) {
      images[i].style.width = mobileSize;
      bodyRef.appendChild(links[i]);
      bigBreak();
    }
    else {
      images[i].style.width = desktopSize;
      bodyRef.appendChild(links[i]);
      if (i === width-1 && width!=-1){
        bigBreak();
      }
    }
  }
  bigBreak();
}

//shows a text element at a given size
function showText(_el, size){
  el = initElement(_el);
  el.style.fontSize = size;
  bodyRef.appendChild(el)
}

//shows and centers a hidden element
function initElement(_el) {
  var el = document.getElementById(_el);
  el.style.display = "block";
  el.style.marginLeft = "auto";
  el.style.marginRight = "auto";
  return el;
}

//B I G
function bigBreak(){
  bodyRef.appendChild(document.createElement("br"));
  bodyRef.appendChild(document.createElement("br"));
  bodyRef.appendChild(document.createElement("br"));
}
