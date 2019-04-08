/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   28 February 2019
; Modified by: Alan Edwards
; Description: Demonstrates how to programmatically set
;              Node.js status codes.
;===========================================
*/

var express = require('express');
var http =  require('http');
var logger = require('morgan');

var app = express ();

app.use(logger('dev'));


//requests using status codes

app.get('/not-found', function(require, response) {

    response.status(404);

    response.json({
        error: 'Resource not found.'
    });
});

app.get('/ok', function(require, response){

    response.json({
        error: "Page loaded correctly."
    });
});

app.get('/not-implemented', function(require, response){

    response.status(500);
    response.json({
        error: "Page not implemented."
    });
});

http.createServer(app).listen(3000, function(){
    console.log('Application is now listening on port 3000');
});
