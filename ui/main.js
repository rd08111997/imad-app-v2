console.log('Loaded!');
var marginLeft = 0;
var img = document.getElementById('madi');
function movert(){
  marginLeft = marginLeft+1;
  img.style.marginLeft = marginLeft + 'px';
  if(marginLeft>=2000)
  {
      marginLeft = 1;
      img.style.marginLeft = marginLeft + 'px';
  }
}
img.onclick = function(){
    var time = setInterval(movert,10);
    };