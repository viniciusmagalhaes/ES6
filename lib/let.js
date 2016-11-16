"use strict";

// ==========================================================================
// Let
// ==========================================================================
var message = "hi";

{
  var _message = "bye";
}

document.querySelector(".item-1").innerHTML = message;

var fd = [];

var _loop = function _loop(i) {

  fd.push(function () {
    console.log(i);
  });
};

for (var i = 0; i < 10; i++) {
  _loop(i);
}

fd.forEach(function (f) {
  f();
});