//const - onece certain value is assigned, it caanot be modified again.

const userName = "Shinhee";
// userName = "Paulina"; ERROR

const name = userName;
console.log(name);

const colors = ["red", "blue", "yello"];
// add brown : use PUSH
colors.push("brown");
// remove last element: use SHIFT (remove first: POP)
colors.pop("");
console.log(colors);


const car = {
    color : "black",
    name : "Ford",
    model : "Focus",
    Year : "2019"
};

// modifiy the information as below:

car.color ="red";
car.name ="VW",
car.model ="Golf"

console.log(car);

const person = {};
// person = {name: "Shinhee", city: "Berlin"}; wrong
person.name = "Shinhee";
person.city = "Berlin";
person.car = [car.name, car.model, car.color];

console.log(typeof person);

console.log(person);