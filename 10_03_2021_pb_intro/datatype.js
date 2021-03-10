// data SVGUnitTypesprimitive data types: numbers, strings, boolean, null and undefined;
// empty variables_ null & undefinedobjects_ arrays and objects;
// data type: the unary operator 'typeof'



// data SVGUnitTypesprimitive data types: numbers, strings, boolean, null and undefined

// numbers ==> flota and integer
let num = 44; //number
let num2 = '44'; //string

let userName;
userName = 'Alex';
userName = 'Cindy';

console.log(typeof num);
console.log(typeof num2);
console.log(typeof userName);
console.log(num);
console.log(num2);


//null : an empty box

//undefined : undefined. box not existing at all

//array : collection of values
let arrowOfNames = ['Shinhee', 'Chae', 100, null, undefined];
console.log(arrowOfNames);
console.log(typeof arrowOfNames);

//object {key: value};
let person = {name:'Shinhee', age: 16};
console.log(person);
console.log(person.name);
console.log(typeof person);

//building up a sentence using variables

let name = 'Shinhee';
let familyName = 'Chae';
let age = 16;
let job ='student';
let city = 'Berlin';

console.log(name, familyName+", " +age+" years old, is a "+job+" living in "+city+".");