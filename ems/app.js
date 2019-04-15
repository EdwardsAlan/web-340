/*
============================================
; Title:  app.js
; Author: Professor Krasso
;Modified: Alan Edwards
; Date:   28 February 2019
; Description: Demonstrates EJS layouts.
;===========================================
*/

v
var express = require("express");
var http = require("http");
var path = require("path");
var mongoose = require("mongoose");
var logger = require("morgan");
var helmet = require("helmet");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");


var Employee = require("./models/employee.js");


var csrfProtection = csrf({ cookie: true });

var app = express();

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


app.use(logger("short"));
app.use(helmet.xssFilter());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(cookieParser());

app.use(csrfProtection);

app.use(function(req, res, next) {
  var token = req.csrfToken();
  res.cookie("XSRF-TOKEN", token);
  res.locals.csrfToken = token;
  next();
});
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

app.get("/new", function(req, res) {
  res.render("new", {
    title: "New Employee"
  });
});


app.get("/new", function (request, response) {
  response.render("new", {
      title: 'EMS|New'
  });
});

app.post("/process", function (req, res) {
  //get requests data 
  const employeeName = req.body.txtName;
  console.log(employeeName)
  //employee model
  var employee = new Employee({
      name: employeeName
    });
    employee.save(function (err) {
      if (err) {
          console.log(err);
          throw err;
      } else {
          console.log(employeeName + 'saved');
          res.redirect('/')
      }
  });

})

app.get("/list",function(req,res){
  Employee.find({},function(error,employees){
      if(error)throw error;
      res.render("list",{
          title:'Employee List',
          employee:employees
      })
  })
})

//Creates app
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
