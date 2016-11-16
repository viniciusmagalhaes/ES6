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
// String tamplates
// ==========================================================================
var salutation = "Hello";
var greeting = salutation + " World";

document.querySelector(".item-1").innerHTML = greeting;