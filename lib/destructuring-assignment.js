"use strict";

// ==========================================================================
// Destructuring assignment
// ==========================================================================

//
// Objects
// ==========================================================================
var _name$age = {
  name: "Vinicius",
  age: 26
},
    name = _name$age.name,
    age = _name$age.age;


document.querySelector(".item-1").innerHTML = name + " - " + age;

function myObject() {

  return {
    color: "blue",
    name: "Jhon",
    "state": "New York"
  };
}

var _myObject = myObject(),
    color = _myObject.color,
    name = _myObject.name,
    state = _myObject.state;

document.querySelector(".item-2").innerHTML = color + " - " + name + " - " + state;

var people = [{
  name: "Vinicius",
  age: 26,
  "e-mail": "viniciusmagalhaes@outlook.com"
}, {
  name: "Joao",
  age: 36,
  "e-mail": "joao@outlook.com"
}, {
  name: "José",
  age: 46,
  "e-mail": "jose@outlook.com"
}, {
  name: "Jhon",
  age: 56,
  "e-mail": "jhon@outlook.com"
}];

// people.forEach(function({name, age}) {
//   document.querySelector(".item-3").innerHTML += name + " " + age + "<br />";
// })

people.forEach(function (_ref) {
  var name = _ref.name,
      age = _ref.age;
  return document.querySelector(".item-3").innerHTML += name + " : " + age + "<br />";
});

//
// Array
// ==========================================================================
var arr = ["São Paulo", 23, "Novembro", 2016];

var cidade = arr[0],
    dia = arr[1],
    mes = arr[2],
    ano = arr[3];


document.querySelector(".item-4").innerHTML = cidade + ", " + dia + " de " + mes + " de " + ano;