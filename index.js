// taskbar text typewriter
var titletext="My personal website!"
var repeat=true;
set=setTimeout;
var index=0;
function scrolltitle(){
  if (index<=titletext.length) {
      document.title=titletext.substring(0,index);
      index++;
      set('scrolltitle()', 200);
    } else {
      index=0;
      if(repeat)set('scrolltitle()',1000);
  }
}
window.onload=function(){
if(!document.layers)set('scrolltitle()',1000);
}
