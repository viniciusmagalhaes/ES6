"use strict";

// ==========================================================================
// Const declarations
// ==========================================================================

// when i use 'const' i can't change the value
var foo = "Hello world";

//foo = "Trying assign another value"; // It's doesn't work

document.querySelector(".item-1").innerHTML = "Value: " + foo;

// If my const is an object, i can assign properties for he
var obj = {};

obj.assign = "value";

console.log("Obj: ", obj);