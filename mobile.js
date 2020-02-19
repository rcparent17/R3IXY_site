/*                r
*    %   %%%%%  %
*  c    %%     %%
*   % % |     | % %
*    %  |  O  |  %          OPKL HKKGEJC WP IU YKZA UKQ ZEJCQO
*   % % |     | % %
*      %%     %%
*     %  %%%%%  %
*                z
*/

//all divs
var music = document.getElementById('musiclinks');
var social = document.getElementById('sociallinks');
var support = document.getElementById('supportlinks');

//body reference for site-putting-together-purposes
var bodyRef = document.getElementById('body');
var onMobile = window.innerHeight > window.innerWidth;



var mLinks = music.querySelectorAll('a');
var socLinks = social.querySelectorAll('a');
var supLinks = support.querySelectorAll('a');

var mImages = music.querySelectorAll('img');
var socImages = social.querySelectorAll('img');
var supImages = support.querySelectorAll('img');

initTop();
drawGroup(mLinks, mImages, 3, "15%", "50%");
showText("followtext");
drawGroup(socLinks, socImages, 3, "10%", "20%");
showText("supporttext");
drawGroup(supLinks, supImages, 3, "20%", "60%");

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

function showText(_el){
  el = initElement(_el);
  if(onMobile){
    el.style.fontSize = "7vw";
  }
  else {
    el.style.fontSize = "4vw";
  }
  bodyRef.appendChild(el)
}

function initTop(){
  var logo = initElement("logo");
  var listen = initElement("listentext");

  if (onMobile) {
    logo.style.width = "70%";
    listen.style.fontSize = "7vw";
  }
  else {
    logo.style.width = "30%";
    listen.style.fontSize = "4vw";
  }
}

function initElement(_el) {
  var el = document.getElementById(_el);
  el.style.display = "block";
  el.style.marginLeft = "auto";
  el.style.marginRight = "auto";
  return el;
}

function bigBreak(){
  bodyRef.appendChild(document.createElement("br"));
  bodyRef.appendChild(document.createElement("br"));
  bodyRef.appendChild(document.createElement("br"));
}
