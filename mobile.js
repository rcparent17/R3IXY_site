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
//var social = document.getElementById('sociallinks');
//var support = document.getElementById('supportlinks');

//body reference for site-putting-together-purposes
var bodyRef = document.getElementById('body');

var onMobile = window.innerHeight > window.innerWidth;

initTop();

var mLinks = music.querySelectorAll('a');


var mImages = music.querySelectorAll('img');


drawGroup(mLinks, mImages, 3);

function drawGroup(links, images, width){
  for (var i = 0; i < links.length; i++) {
    if (onMobile) {
      bodyRef.appendChild(links[i]);
      bodyRef.appendChild(document.createElement("br"));
      bodyRef.appendChild(document.createElement("br"));
      bodyRef.appendChild(document.createElement("br"));
    }
    else {
      images[i].style.width = "15%";
      bodyRef.appendChild(links[i]);
      if (i === width-1 && width!=-1){
        bodyRef.appendChild(document.createElement("br"));
        bodyRef.appendChild(document.createElement("br"));
        bodyRef.appendChild(document.createElement("br"));
      }
    }
  }
}

function initTop(){
  var logo = document.getElementById('logo');
  logo.style.display = "block";
  logo.style.marginLeft = "auto";
  logo.style.marginRight = "auto";

  var listen = document.getElementById('listentext');
  listen.style.display = "block";
  listen.style.marginLeft = "auto";
  listen.style.marginRight = "auto";

  if (onMobile) {
    logo.style.width = "70%";
  } 
  else {
    logo.style.width = "30%";
    listen.style.fontSize = "4vw";
  }
}

function bigBreak(){

}
