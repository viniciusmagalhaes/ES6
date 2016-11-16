// ==========================================================================
// Let
// ==========================================================================
let message = "hi";

{
  let message = "bye";
}

document.querySelector(".item-1").innerHTML = message;


var fd = [];

for(let i = 0; i < 10; i++) {

  fd.push(function() {
    console.log(i);
  })

}

fd.forEach(function(f) {
  f();
})
