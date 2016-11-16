"use strict";

// ==========================================================================
// 
// ==========================================================================
function receive() {
  var complete = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
    return console.log("xax");
  };

  complete();
}

receive();

// ==========================================================================
// Shorthand properties
// ==========================================================================
function person(name, age) {
  return {
    name: name,
    age: age
  };
}

var otherPerson = person("Vinicius", "26");

document.querySelector(".item-1").innerHTML = otherPerson.name;

// ==========================================================================
// Object enhancements
// ==========================================================================
var name = "Vinicius";
var lastName = "Santos";

var p = {
  name: name,
  lastName: lastName,

  show: function show() {
    return console.log(name + lastName);
  }
};

console.log(p);

// ==========================================================================
// Spread
// ==========================================================================

var first = [1, 2, 3];
var second = [3, 4, 5, 6];

first.push.apply(first, second);
console.log(first);

function addThreeThings(a, b, c) {
  var total = a + b + c;
  console.log(total);
}

addThreeThings.apply(undefined, first);

// ==========================================================================
// String tamplates
// ==========================================================================
var salutation = "Hello";
var greeting = salutation + " World";

console.log(greeting);