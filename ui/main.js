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


//when button is clicked we request the server and get the response and parse it
var button = document.getElementById("button");
    button.onclick = function(){
       var request = new XMLHttpRequest();
       request.onreadystatechange = function(){
       if(request.readyState === XMLHttpRequest.DONE){
         if(request.status === 200){
          var count = reuest.responseText;   
          var span  = document.getElementById("countno");
          span.innerHTML = count.toString();        
         }  
       }    
       };
       request.open('GET','http://rd08111997.imad.hasura-app.io/count',true);
       request.send(null);
              
        
    };