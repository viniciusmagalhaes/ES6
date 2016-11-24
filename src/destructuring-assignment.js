// ==========================================================================
// Destructuring assignment
// ==========================================================================

//
// Objects
// ==========================================================================
var {name, age} =  {
  name: "Vinicius",
  age: 26
}

document.querySelector(".item-1").innerHTML = name + " - " + age;


function myObject () {

  return {
    color: "blue",
    name: "Jhon",
    "state": "New York"
  }
}

var {color, name, state} = myObject();

document.querySelector(".item-2").innerHTML = color + " - " + name + " - " + state;


var people = [
  {
    name: "Vinicius",
    age: 26,
    "e-mail": "viniciusmagalhaes@outlook.com"
  },
  {
    name: "Joao",
    age: 36,
    "e-mail": "joao@outlook.com"
  },
  {
    name: "José",
    age: 46,
    "e-mail": "jose@outlook.com"
  },
  {
    name: "Jhon",
    age: 56,
    "e-mail": "jhon@outlook.com"
  }
]


// people.forEach(function({name, age}) {
//   document.querySelector(".item-3").innerHTML += name + " " + age + "<br />";
// })

people.forEach( ({name, age})=> document.querySelector(".item-3").innerHTML += name + " : " + age + "<br />");


//
// Array
// ==========================================================================
var arr = ["São Paulo", 23, "Novembro", 2016];

var [cidade, dia, mes, ano] = arr;

document.querySelector(".item-4").innerHTML = cidade + ", " + dia + " de " + mes + " de " + ano;
