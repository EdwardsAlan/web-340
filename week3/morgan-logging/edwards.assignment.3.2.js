var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

// assigning express object to variable 
var app = express();

// set the view
app.set('views', path.resolve(__dirname, 'views'));

//use EJS view engine
app.set('view engine', 'ejs');

//add logger
app.use(logger('dev'));

//get request, return and response
app.get('/', function(request, response){
    response.render('index', {
        message: 'Now viewing Morgan Logging example'
    });
});

http.createServer(app).listen(3000, function(){
    console.log('Application started and listening on port %s', 3000);
});
