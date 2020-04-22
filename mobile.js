/*author: Reilly Parent
*                 r
*    %   %%%%%  %
*  c    %%     %%
*   % % |     | % %
*    %  |  O  |  %          OPKL HKKGEJC WP IU YKZA UKQ ZEJCQO
*   % % |     | % %
*      %%     %%
*     %  %%%%%  %
*                z
*/

//this code decides what div (desktop or mobile) to display based on window width/height

var onMobile = window.innerHeight > window.innerWidth;

var desktop = document.getElementById('desktop');
var mobile = document.getElementById('mobile');

if(onMobile) {
  mobile.style.display = "block";
}
else {
  desktop.style.display = "block";
}
