console.log('Loaded!');
var marginLeft = 0;
var img = document.getElementById('madi');
function movert(){
  if(marginLeft==900)
  marginLeft = marginLeft+1;
  img.style.marginLeft = marginLeft + 'px';
 
}
img.onclick = function(){
    var time = setInterval(movert,10);
    };