console.log('Loaded!');
var marginLeft = 0;
var img = document.getElementById('madi');
function movert(){
  marginLeft = marginLeft+10;
  img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
    var time = setInterval(movert,10);
    };