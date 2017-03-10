var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var config = {
    user:'rd08111997',
    database:'rd08111997',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:'db-rd08111997-15259'
    
};
var crypto = require('crypto');
var pool = new Pool(config);


var app = express();
app.use(morgan('combined'));
var article = {
 'article-one' :{ 
    
    heading:'article one',
    question:'who is person',
    description:'<p>let me tell you that who is person</p>'
    },

    'article-two':{
    
    heading:' article two',
    question:'who is Rd',
    description:'<p>let me tell you that who is Rd</p>'}
};
function create_dummy(data)
{
   
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var html_dummy = `<!doctype html>
    <html>
    <head>
    <link href="/ui/style.css" rel="stylesheet" type="text/css" />
    <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.1.1.min.js"></script>
    
    <title>webapp</title>    
    </head>
    <body>
        <a href="/">home</a>
        <hr/>
        <h1>${heading}</h1>
        <h3>${date}</h3>
        ${content}
    <input type="text" id="comment" placeholder="commment"></input>
    <input type="submit" id="comsubmit" value"submit"></input>
    <ul id ="commentlist">
    </ul>
     <script type="text/javascript" src="/ui/article.js">
        </script>
    </body>
    </html>`
    ;
return html_dummy;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
function createProduct(data){
    var image = data.image;
    var title = data.title;
    var price = data.price;
    var description = data.description;
    var prohtml = `<!DOCTYPE HTML>
    <html>
    <head>
    <title>${title}</title>
    </head>
    <body>
    <a href="/">home</a>
        <hr/>
        <h1>${title}</h1>
        <p>
        ${description}
        </p>
        <p>${price}</p>
    </body>
    </html>`;
    return prohtml;
}

app.get('/ui/userpage',function (req,res){
   res.sendFile(path.join(__dirname, 'ui', 'userpage.html')); 
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/favicon.ico', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/article.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article.js'));
});

var comment=[];
app.get('/article-one/comments',function (req,res){
    var commentno = req.query.commentno;
    comment.push(commentno);
    res.send(JSON.stringify(comment));
});

var count = 0;
app.get('/count', function (req,res) {
    count++;
    res.send(count.toString());
});
var names = [];
app.get('/nameadd', function (req,res) {
   var name = req.query.name;
   names.push(name);
   res.send(JSON.stringify(names));
    
});

app.get('/article/:articleName', function (req,res) {
   pool.query("SELECT * from article WHERE title='" + req.params.articleName + "'", function (err,result){
             if(err) {
           res.status(500).send(err.toString());
       }
       else{
           if(result.rows.length===0){
               res.status(404).send("not found sorry");
           }
           else{
               var articleData = result.rows[0];
               res.send(create_dummy(articleData)); 
           }
       }
   });
   });
   //pool.query("SELECT * from article WHERE title=" + req.params.articleName , funtion (err,res){
   //});
   
function hash(input,salt){
   var hashed =  crypto.pbkdf2Sync(input,salt,100,512,'sha512');
   return hashed.toString('hex');
}
app.get('/hash/:input' , function (req , res){
    var userInput = hash(req.params.input,'rand');
    res.send(userInput);
});

app.get('/userpage/:pro', function (req, res) {
  pool.query("SELECT * from products WHERE title='" + req.params.pro + "'", function (err,result){
      // handle an error from the query
      if(err) 
     { res.status(500).send(err.toString());}
     else{
           if(result.rows.length===0){
               res.status(404).send("not found sorry");
           }
     else
     {
        var product= result.rows[0];
        res.send(createProduct(product));
         
     }
     } 
    });
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
