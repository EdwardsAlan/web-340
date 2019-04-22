/*
============================================
; Title:  app.js
; Author: Professor Krasso
;Modified: Alan Edwards
; Date:   28 February 2019
; Description: Demonstrates EJS layouts.
;===========================================
*/

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// employeeSchema defined
var employeeSchema = new Schema({
  firstName: String,
  lastName: String
});

// employee model defined
var Employee = mongoose.model("Employee", employeeSchema);

// make module accesible with export
module.exports = Employee;
