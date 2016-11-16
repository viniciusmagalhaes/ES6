// ==========================================================================
// Spread
// ==========================================================================

let first = [1,2,3];
let second = [3,4,5,6];

first.push(...second);
document.querySelector(".item-1").innerHTML = (first);

function addThreeThings(a,b,c) {
  let total = a + b + c;
  document.querySelector(".item-2").innerHTML = total;
}

addThreeThings(...first);
