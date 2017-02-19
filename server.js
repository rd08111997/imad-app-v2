var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var article = {
 'article-one' :{ 
    
    heading:' article one',
   question:'who is babxbu',
    description:'<p>let me tell you that who is babbu</p>'
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
    <title>webapp</title>    
    </head>
    <body>
        <a href="/">home</a>
        <hr/>
        <h1>${heading}</h1>
        <h3>${question}</h3>
        ${description}
         
    </body>
    </html>`;
return html_dummy;
}
    


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/:articleName', function (req,res) {
   articleName = req.params.artcileName;
   res.send(create_dummy(article[articleName]));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
