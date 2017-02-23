var express = require('express');
var morgan = require('morgan');
var path = require('path');

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
    var question = data.question;
    var description = data.description;
    var html_dummy = `<!doctype html>
    <html>
    <head>
    <link href="/ui/style.css" rel="stylesheet" type="text/css" />
    <title>webapp</title>    
    </head>
    <body>
        <a href="/">home</a>
        <hr/>
        <h1>${heading}</h1>
        <h3>${question}</h3>
        ${description}
    <input type="text" id="comment" placeholder="commment"></input>
    
    </body>
    </html>`
    ;
return html_dummy;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
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

app.get('/:articleName', function (req,res) {
   var articleName = req.params.articleName;
   res.send(create_dummy(article[articleName]));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
