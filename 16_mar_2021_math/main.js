// null vs undefined
//null is an object, value must be assigned.


//numbers: intergers & floats
            //3,4,5..    //3.03, 4.15, 5.349...

//infinitiy

// NaN: not a number

let num = 5230;
console.log(typeof num);
num = String(num);
console.log(typeof num);
num = (typeof String(false));
console.log(typeof false);
console.log(typeof String(null));
console.log(typeof null);

console.log('55' + 2);
console.log(Number('55') + 2);
console.log(Number(true)); //1
console.log(Number(false)); //0

console.log(parseInt(50.01)); //parseInt: just show me the integar. float -> integer
console.log(parseInt('50.23')); //works with string, as well. string -> integer
console.log(parseFloat('50.000052')); // string -> float
console.log(parseFloat('3.29'));


let price = 1.05345;
price = price.toFixed(3); //toFixed: 소수점 3자리까지만 표시, 넘버가 스트링으로 변환됨.
console.log(price.length); //스트링 상태이므로 길이 인식됨. 넘버 상태에선 안됨.
console.log(typeof price, price); //must change the type string -> number
price = Number(price);

//better way: 
price = Number(price.toFixed(3));
price = parseFloat(price);
console.log(typeof price, price);
console.log(price.length); //넘버 상태에선 undefined.

//Math in javascript
console.log(Math.PI); //원주율
console.log(Math.E);  //자연로그의 밑, base of the natural logarithm

console.log(Math.round(3.5)); //round: 반올림,4
console.log(Math.ceil(4.031)); //ceil: 올림, 5
console.log(Math.floor(2.999)); //내림, 2
console.log(Math.sqrt(64)); //squre root 제곱근
console.log(Math.cbrt(27)); //cube root 세제곱근
console.log(Math.pow(6,2)); //6을 두번 곱할 것

//combination
let num2 = Math.floor(Math.sqrt(35));
console.log(num2);


//ab: absolute. ab -2 = 2

//sign: whether positive, negative, or zero?

let num3 = -44;
if(Math.sign(num3)=== -1) {
    console.log('negative');
} else if(Math.sign(num3)=== 0) {
    console.log(0);
} else {
    console.log('positive');
}

//max, min
console.log(Math.max(1,2,3,202, 30));

//random
let myRandom = Math.random(); //기본적으로 0-0.99까지 랜덤 표시 

myRandom = Math.round(Math.random()* 10); // 10을 곱하면 0-10까지 랜덤 표시
console.log('random: ',myRandom);

//NaN: datatype is number(numeric, it just cannot be expressed with actual numbers)
console.log(typeof NaN);
console.log(10 / 'fff');
console.log(Number('015B'));
console.log(10 / '0'); //infinity
console.log(typeof Infinity); //NaN의 반대개념
console.log(0 / 0); //NaN

//infinity
console.log(Math.pow(12, 1000));