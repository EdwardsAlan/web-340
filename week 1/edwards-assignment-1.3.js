/*
============================================
; Title:  url-module.js
; Author: Professor Krasso
; Date:   28 February 2019
; Modified by : Alan Edwards
; Description: Demonstrates how to parse a Node.js URL
;===========================================
*/


var url = require('url');

var parsedURL = url.parse('http://www.edwardsexample.com/profile?name=edwards');

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);
