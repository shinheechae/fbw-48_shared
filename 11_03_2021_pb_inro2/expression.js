'use strict';
let personName = "Shinhee";
console.log(personName);

let personAge = 16;
console.log(personName, personAge);

console.log(personAge > 20);
console.log(personAge >= 16);
console.log(personAge == "16"); // value is the same, thus true
console.log(personAge === "16"); // type is different, thus false

if(personAge >= 16) {
    console.log("You may drink Beer in Germany")
} else {
    console.log("Sorry, come next year again.")
}



// artithmetic expressions
console.log(personAge+10);
console.log(personAge-9);
console.log((personAge *29.5 -10) /3);

//logical operators (true or false)
console.log(true || false); // if one of them is true, it's true
console.log(personAge > 20 || personAge >15); 

console.log(true && true); // both must be true, then it's true
console.log(personAge > 20 && personAge >15); 