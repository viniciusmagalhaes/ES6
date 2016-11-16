// ==========================================================================
// Const declarations
// ==========================================================================

// when i use 'const' i can't change the value
const foo = "Hello world";

//foo = "Trying assign another value"; // It's doesn't work

document.querySelector(".item-1").innerHTML = "Value: " + foo;


// If my const is an object, i can assign properties for he
const obj = {};

obj.assign = "value";

console.log("Obj: ", obj);
