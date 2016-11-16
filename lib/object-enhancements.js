"use strict";

// ==========================================================================
// Object enhancements
// ==========================================================================
var name = "Vinicius";
var lastName = "Santos";

var p = {
  name: name,
  lastName: lastName,

  show: function show() {
    return document.querySelector(".item-1").innerHTML = name + lastName;
  }
};

p.show();

console.log(p);