// ==========================================================================
// Object enhancements
// ==========================================================================
let name = "Vinicius";
let lastName = "Santos";

let p = {
  name,
  lastName,

  show() {
    return document.querySelector(".item-1").innerHTML = name + lastName;
  }
}

p.show();

console.log(p);
