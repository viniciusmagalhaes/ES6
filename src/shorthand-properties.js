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
