/*
============================================
; Title:  app.js
; Author: Professor Krasso
;Modified: Alan Edwards
; Date:   28 February 2019
; Description: Demonstrates EJS layouts.
;===========================================
*/
/*
============================================
; Title:  app.js
; Author: Professor Krasso
;Modified: Alan Edwards
; Date:   28 February 2019
; Description: Demonstrates EJS layouts.
;===========================================
*/

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var Employee = require("./models/employee.js");

var mongoDB ="mongodb+srv://test-vttij.mongodb.net/test"

mongoose.connect(mongoDB, {
  useMongoClient: true
});

mongoose.Promise=global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console,"connection error: "));

db.once("open", function(){
  console.log("Application connected to mLab MongoDB instance")
})

var app = express();

app.use(logger("short"));

var employee = new Employee({
  fistname: "Jack",
  lastName: "Daniels"
})




app.set("views", path.resolve(__dirname, "views/"));
app.set("view engine", "ejs");
app.use(logger("short"));


//routing
app.get("/", function(request, response) {
  response.render("index", {
    title: "Homepage"
  });
});

//Creates app
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
