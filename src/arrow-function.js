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
