       var kak = document.getElementById("comsubmit"); 
    kak.onclick= function(){
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
                            var ul = document.getElementById("commentlist");
                            ul.innerHTML = k;
               }
           }
        };
        var nameInput = document.getElementById("comment");
        var namer = nameInput.value;   
 
       request.open('GET','http://rd08111997.imad.hasura-app.io/article-one/comments?commentno='+namer,true);
       request.send(null);

    };
