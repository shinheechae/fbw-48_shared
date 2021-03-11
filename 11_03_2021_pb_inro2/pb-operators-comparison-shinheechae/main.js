let apples = 20;
oranges = 30;

console.log(("Are apples and oranges not equal?", apples == oranges)); //1. false
console.log("Are apples and oranges not equal?", apples != oranges); //2. true
console.log("Is apples greater than oranges?", apples > oranges); //3. false
console.log("Is apples less than or equal to oranges?", apples <= oranges); //4. true
console.log("Is oranges greater than apples?", apples < oranges); //5. true

mangoes = 5;

console.log("Declare another variable 'mangoes' and give it a value of 5. Multiply mangoes and apples, is this result greater than mangoes added to oranges?",(mangoes * apples) > (mangoes + oranges)); //6. 100 > 35, true
console.log("Subtract mangoes from apples is this result less than oranges divided by mangoes?",(apples - mangoes) < (oranges / mangoes)); //7. 15 < 6, false
console.log("Are mangoes, apples and oranges equal?",oranges == mangoes == apples); //8. false
console.log("Are the remainder of apples divided by mangoes and the remainder of oranges divided by mangoes equal?",(apples % mangoes) == (oranges % mangoes)); //9. true
console.log("Is mangoes added to apples greater than oranges minus mangoes?",(mangoes + apples) > (oranges - mangoes)); //10. false
console.log("Is mangoes added to apples equals oranges minus mangoes?",(mangoes + apples) == (oranges - mangoes)); //10.1 true

