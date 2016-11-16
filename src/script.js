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


// ==========================================================================
// Let
// ==========================================================================
let message = "hi";

{
  let message = "bye";
}

document.querySelector(".item-2").innerHTML = message;


var fd = [];

for(let i = 0; i < 10; i++) {

  fd.push(function() {
    console.log(i);
  })

}

fd.forEach(function(f) {
  f();
})


// ==========================================================================
// Arrow function
// ==========================================================================

// I don't need the word 'return'
var arrowGreeting = (name, message) => message + name;
document.querySelector(".item-3").innerHTML = arrowGreeting("World", "Hello ");

// if my function just have one parameter i don't need to ()
var age = n => n;
console.log("My age is", age(26));


// e.g
var deliveryBoy = {

  name: "Jhon",

  handleMessage: function (message, handler) {

    handler(message);

  },

  receive: function() {

    this.handleMessage("Hello, ", message => console.log(message + this.name))

  }

}

deliveryBoy.receive();
