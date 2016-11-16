// ==========================================================================
// 
// ==========================================================================
function receive(complete = () => console.log("xax")) {
  complete();
}

receive()


// ==========================================================================
// Shorthand properties
// ==========================================================================
function person(name, age) {
  return {
    name,
    age
  }
}

var otherPerson = person("Vinicius", "26");

document.querySelector(".item-1").innerHTML = otherPerson.name;


// ==========================================================================
// Object enhancements
// ==========================================================================
let name = "Vinicius";
let lastName = "Santos";

let p = {
  name,
  lastName,

  show() {
    return console.log(name + lastName);
  }
}

console.log(p);


// ==========================================================================
// Spread
// ==========================================================================

let first = [1,2,3];
let second = [3,4,5,6];

first.push(...second);
console.log(first);

function addThreeThings(a,b,c) {
  let total = a + b + c;
  console.log(total)
}

addThreeThings(...first);


// ==========================================================================
// String tamplates
// ==========================================================================
let salutation = "Hello";
var greeting = `${salutation} World`;

console.log(greeting);
