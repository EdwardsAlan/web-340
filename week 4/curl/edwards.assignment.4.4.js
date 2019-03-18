/*
============================================
; Title:  edwards.assignmnet.4.4.js
; Author: Alan Edwards
; Date:   17 March 2019
; Description: tests curl requests for GET, POST, PUT, and DELETE
;===========================================
*/

// Console logs the header created previously
const header = require('../../edwards-header');
console.log(header.display("Alan" , "Edwards" , "cURL"));
var express = require("express");
var http = require("http");

var app = express();

app.get("/", function(request, response) {
  response.send("API invoked as an HTTP GET request.");
});

app.put("/", function(request, response) {
  response.send("API invoked as an HTTP PUT request.");
});

app.post("/", function(request, response) {
  response.send("API invoked as an HTTP POST request");
});

app.delete("/", function(request, response) {
  response.send("API invoked as an HTTP DELETE request");
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
