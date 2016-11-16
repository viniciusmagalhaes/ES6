"use strict";

// ==========================================================================
// Spread
// ==========================================================================

var first = [1, 2, 3];
var second = [3, 4, 5, 6];

first.push.apply(first, second);
document.querySelector(".item-1").innerHTML = first;

function addThreeThings(a, b, c) {
  var total = a + b + c;
  document.querySelector(".item-2").innerHTML = total;
}

addThreeThings.apply(undefined, first);