//a1

let str = '     Shinhee ';
console.log(typeof str);

if (typeof str !== 'string') {
    console.log('undefined');
} else {
    str = str.trim().toLowerCase();
}

console.log(str);

//a2
let text = 'what a day!'
console.log(text.includes('summer'));
console.log('I like summer.')

//a3
let myCity = 'Seoul';
let myAge = 16;
console.log(myCity.length > myAge);

//a4
let myStreet = 'Kreuzbergstr';
console.log(myStreet.substr(1));