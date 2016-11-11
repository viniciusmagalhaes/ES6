"use strict";

// ==========================================================================
// Const declarations
// ==========================================================================

// when i use 'const' i can't change the value
var foo = "Hello world";

//foo = "Trying assign another value"; // It's doesn't work

console.log('value: ', foo);

// If my const is an object, i can assign properties for he
var obj = {};

obj.assign = "value";

console.log("Obj: ", obj);

// ==========================================================================
// Arrow function
// ==========================================================================

var arrowGreeting = function arrowGreeting(name, message) {
  return message + name;
};

document.querySelector(".item-1").innerHTML = arrowGreeting("World", "Hello ");

// if my function just have one parameter i don't need to ()
var age = function age(n) {
  return n;
};
console.log("My age is", age(26));

var deliveryBoy = {

  name: "Jhon",

  handleMessage: function handleMessage(message, handler) {

    handler(message);
  },

  receive: function receive() {
    var _this = this;

    this.handleMessage("Hello, ", function (message) {
      return console.log(message + _this.name);
    });
  }

};

deliveryBoy.receive();

// var deliveryBoy = {

//   name: "Jhon",

//   handleMessage: function(message, handler) {

//     handler(message);

//   },

//   receive: function() {

//     var that = this;

//     console.log('name ' + this.name);

//     this.handleMessage("Hello, ", function(message) {

//       // that.name; //get the proper name
//       console.log(message + that.name);

//     })

//     function x () {
//       console.log(this, 'hushushus')
//     }

//     x();

//   }

// }


// deliveryBoy.receive();