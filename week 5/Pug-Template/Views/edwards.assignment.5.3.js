/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   28 February 2019
; Modified by: Alan Edwards
; Description: Demonstrates EJS layouts.
;===========================================
*/

//require
var express = require('express');
var http = require('http');
var path = require('path');
var pug = require('pug');

var app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine','pug');

//route
app.get('/', function(require, response) {
    resizeBy.render('index', {
        message: 'Strive not to be a success, but rather to be of value - Albert Einstein'
    });
});

//
http.createServer(app).listen(3003, function() {

    console.log("Application started on port 3003!");

});
