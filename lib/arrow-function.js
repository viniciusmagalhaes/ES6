"use strict";

// ==========================================================================
// Arrow function
// ==========================================================================

// I don't need the word 'return'
var arrowGreeting = function arrowGreeting(name, message) {
  return message + name;
};
document.querySelector(".item-3").innerHTML = arrowGreeting("World", "Hello ");

// if my function just have one parameter i don't need to ()
var age = function age(n) {
  return n;
};
console.log("My age is", age(26));

// e.g
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