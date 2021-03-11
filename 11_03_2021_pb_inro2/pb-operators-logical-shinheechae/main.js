let isDogBetter = true;
isCatBetter = false;

console.log(isDogBetter && isCatBetter); //false
console.log(isDogBetter || isCatBetter); //true
console.log(!(isDogBetter && isCatBetter)); //true

let atoms = 7;
sandGrains = 0;
starsInSky = 1000;

console.log((atoms > starsInSky) && (atoms > sandGrains),"statement 7>100 isn't true"); //false
console.log(atoms != sandGrains, "7 doesn't equal to 0"); //true  
console.log((starsInSky < sandGrains) || (starsInSky > atoms), "'1000 < 0' is false, but the 2nd statement '1000 > 7' is valid. so it'S true."); //true
console.log((atoms == starsInSky) || (atoms != sandGrains), "the 1st statement '7 equals to 100' is false, but the 2nd statement '7 isn't equal to 0' is true. so it's true."); //true
console.log((atoms >= 10) && (sandGrains <= 10), "the 1st statement 7 is greater than or equal to 10 is false. so it's false."); //false
console.log((atoms * starsInSky < 100) || (atoms * sandGrains > 100), "both statements are false, so it's false."); //false