
    
/*
============================================
; Title:  edwards-assignment-2.2.js
; Author: Alan Edwards
; Date:   3 March 2019
; Description: Creating node.js server using express
;===========================================
*/

// Console logs the header created previously
const header = require('../edwards-header.js');
console.log(header.display("Alan" , "Edwards" , "Exercise 2.2"));

var express = require("express");
var http = require("http");
var app = express();

app.use(function(req, res){
  console.log("In comes a request to: %s", req.url);
  res.end("Hello World\n")
})

// creates server on port 8080
http.createServer(app).listen(8080, function(){
  console.log("Application started on port %s", 8080)
