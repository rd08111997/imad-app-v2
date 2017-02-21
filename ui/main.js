console.log('Loaded!');
var marginLeft = 0;
var img = document.getElementById('madi');
function movert(){
  if(marginLeft<=900)
  {
  marginLeft = marginLeft+1;
  img.style.marginLeft = marginLeft + 'px';
  }
}
img.onclick = function(){
    var time = setInterval(movert,10);
    };
var count = 0;
var button = document.getElementById("button");
    button.onclick = function(){
        count++;        
        var span  = document.getElementById("countno");
        span.innerHTML = count.toString();
    };