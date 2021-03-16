//a1

const countries = ['Germany', 'Spain', 'Italy', 'USA'];
const random = Math.floor(Math.random() * countries.length);

console.log(countries[random]);


//a2
const names = ['Alex', 'Max', 'Tommy'];
const random2 = Math.floor(Math.random() * names.length);

console.log(`Hi ${names[random2]}, how are you?`);

//a3
const numbers = [-1, 7, -33, -8, 9];
const random3 = Math.floor(Math.random() * numbers.length);

console.log(Math.abs(numbers[random3]));
