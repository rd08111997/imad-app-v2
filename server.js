var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleone ={ 
    title:'article one',
    heading:' article one',
    question:'who is babbu',
    description:'<p>let me tell you that who is babbu</p>'
    };
function create_dummy(article)
{
    var title = article.title;
    var heading = article.heading;
    var question = article.question;
    var description = article.description;
     var html_dummy = 
    `<!doctype html>
    <html>
    <head>
    <title>${title}</title>    
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
app.get('/article-one', function (req,res) {
   res.send(create_dummy(article_one));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
