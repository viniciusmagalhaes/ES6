// ==========================================================================
// 
// ==========================================================================
function receive(complete = () => console.log("xax")) {
  complete();
}

receive()


// ==========================================================================
// String tamplates
// ==========================================================================
let salutation = "Hello";
var greeting = `${salutation} World`;

document.querySelector(".item-1").innerHTML = greeting;
