/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   28 February 2019
; Modified by: Alan Edwards
; Description: Demonstrates how to setup a MongoDB
;              connection.
;===========================================
*/

// Console logs the header created previously
const header = require('./edwards-header');
console.log(header.display("Alan" , "Edwards" , "mongoose-connection"));

var express = require("express");
var http  = require("http");
var logger = require("morgan")
var mongoose = require("mongoose");

var mongoDB = "mongodb+srv://ems-shard-00-00-ll0qm.mongodb.net/test?retryWrites=true";

mongoose.connect(mongoDB, {
  useMongoClient: true  
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connected error: "));

db.once("open", function(){
  console.log("Application connected to mLab MongoDB instance")
})

var app = express();
app.use(logger("dev"));

http.createServer(app).listen(8080, function(){
  console.log("We are live on 8080")
});
