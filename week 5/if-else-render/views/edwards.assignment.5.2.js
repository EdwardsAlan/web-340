/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   28 February 2019
; Modified by: Alan Edwards
; Description: Demonstrates EJS layouts.
;===========================================
*/

var express = require('express');
var http = require('http');
var path = require('path');

var app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

var composers = [

  "Bach",
  "Mozart",
  "Beethoven",
  "Verdi"

];

//routes
app.get('/', function(request, response) {

    response.render('index', {
        names: composers

    });

});

http.createServer(app).listen(3000, function() {

    console.log("Application started on port 3000!");

});

