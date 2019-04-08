/*
============================================
; Title:  fruit.js
; Author: Professor Krasso
; Date:   28 February 2019
; Modified by: Alan Edwards
; Modified on 7 April 2019
; Description: Function used in a Chai test.
;===========================================
*/

var fruits = require("../fruits");

var chai = require("chai");

var assert = chai.assert;

describe("fruits", function() {

    it("should return an array of fruits", function() {

        var f = fruits('Apple,Orange,Mango');

        assert(Array.isArray(f));

    });

});
