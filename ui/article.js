       var kak = document.getElementById("comsubmit"); 
         kak.onclick= function(){
       var request = new XMLHttpRequest();
       request.open('GET','http://rd08111997.imad.hasura-app.io/article-one/comments?commentno='+namer,true);
       request.send(null);

    };
