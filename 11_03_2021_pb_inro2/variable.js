'use strict';

var name = 'Shinhee';
name = 'Coder Shinhee';
console.log(name);
var age = 16;
console.log(name,age);
console.log(name+' '+age); //same result as line 7
var $name = 'Chae';
console.log($name,age);

// console.clear(); - removes the codes up until here


// let
let firstName = "Shinhee";  // camel case - officially used in js
let lastName = "Chae";
let BirthDate = "16.10.1999"; //pascal case
let user_name = "shinhee.chae"; // underscore case

let address;
address = "Berlin";
address = "Hamburg";
address = ["Berlin", "Hamburg", "Seoul"];
console.log(address);
console.log(typeof address);

console.log("Hi, I'm "+ firstName+" and I'm living in "+address+", of which types are "+typeof address+".")