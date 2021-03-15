//q1
let message = 'I can walk in the park all day!';
console.log(message.substr(18,4));


//q2
let greeting = 'hello world';
console.log(greeting.toUpperCase());


//q3
let greeting3 = 'Hello Earthling';
console.log(greeting3.toLowerCase());

//q4
let js = 'JavaScript';
console.log(js.substr(3,3));

//q5
let str = 'nice shoes';
console.log(str.includes('l') || str.includes('n'));  


//q6
let myFruit = 'raspberries';
let newFruit = myFruit[0]+myFruit+myFruit[0];
console.log(newFruit);

//q7
let myToy = 'playStation';
console.log(myToy.substr(-3, 3))
let newToy = myToy.substr(-3, 3)+myToy+myToy.substr(-3, 3);
console.log(newToy);

//q8
let myWord = 'compliment';
console.log(myWord.substr(1,8));
console.log(myWord[9]);
let newWord =myWord[9]+myWord.substr(1,8)+ myWord[0];
console.log(newWord);

//q9
let myWish = 'a new job';
let myCity = 'Düsseldorf';
let myPet = 'a gray cat';
console.log(`Hi, my goal for this year is to get ${myWish} in ${myCity}, living with ${myPet}.`);

//q10
let keyword = 'the quick brown fox';
let keyWord = keyword[0].toUpperCase() + keyword.substr(1);
console.log(keyWord);