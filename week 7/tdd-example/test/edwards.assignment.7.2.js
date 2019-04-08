/*
============================================
; Title:  Node Testing
; Author: Professor Krasso
; Modified by: Alan Edwards
; Date:   4/7/2019
; Description: Demonstrates how to test 
;===========================================
*/

var assert = require("assert");

describe("String#split", function() {

    it("should return an array of fruits", function() {

        assert(Array.isArray('Apple,Orange,Mango'.split(',')));

    });

});

