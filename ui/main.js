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
          var count = request.responseText;   
          var span  = document.getElementById("countno");
          span.innerHTML = count.toString();        
         }  
       }    
       };
       request.open('GET','http://rd08111997.imad.hasura-app.io/count',true);
       request.send(null);
              
        
    };
        
    var submit = document.getElementById("submit");
    
    submit.onclick = function(){
        //when i submit it will change the li to say name one , 2etc
        var request = new XMLHttpRequest();
       request.onreadystatechange = function(){
       if(request.readyState === XMLHttpRequest.DONE){
         if(request.status === 200){
          var list = request.responseText;
          list = JSON.parse(list);
        var k='';
        for( var i=0;i<list.length;i++){
        k += '<li>' + list[i] + '</li>';
        }
           var ul = document.getElementById("list"); 
           ul.innerHTML = k;       
         }  
       }
       };
       var nameInput = document.getElementById("name");
       var namer = nameInput.value;
        request.open('GET','http://rd08111997.imad.hasura-app.io/nameadd?name='+namer,true);
        request.send(null);
       
        };
