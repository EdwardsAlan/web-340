/*
============================================
; Title:  edwards-header.js
; Author: Professor Krasso 
; Date:   05 December 2018
; Modified By: Alan Edwards
; Description: Displays a formatted header
;===========================================
*/

/**
* Params: firstName, lastName, assignment
* Response: output 
* Description: Returns a well-formatted string header
*/

exports.display = function (firstName, lastName, assignment) {
    let output = '\n' + firstName + ' ' + lastName + '\n' + assignment + '\nDate: ' +
      new Date().toLocaleDateString('en-US')
  
    return output
  }
  
var http = require("http");

function processRequest(req, res) {

var body = "Brown Bear, Brown Bear";

    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body);

}

var s = http.createServer(processRequest);

s.listen(8080);
