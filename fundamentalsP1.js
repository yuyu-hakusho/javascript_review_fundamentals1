"use strict";

/* Working with variables
let word = "thank";
const word2 = "you";
var word3 = "very much";

console.log(word, word2, word3);

word = "spank";
word3 = "really";

console.log(word, word3);

word2 = "u";

console.log(word2);

*/

/*Working with Numbers
let num = 1;
console.log(num);

num += 15;
console.log(num);

num -= 8;
console.log(num);

let average = (26+44+72+86+112)/5
console.log(average);

let theNumber = 14;
console.log(++theNumber);

//6. %

*/

/*Working with Strings
let verb = "do",
    noun = "cat",
    adjective = "pretty",
    color = "white",
    label = "Snowy",
    madlib = adjective + "\n" + color + "\n" + noun + "\n" + verb + "\n" + label;

console.log(madlib);

let madlibLiteral = `${adjective} ${color} ${noun} ${verb} ${label}`;
console.log(madlibLiteral);

//4. let x = Number.parseFloat("string");
*/

/*Conditionals
let x = 2,
    y = 3;

if (x > y) {
    console.log("Hello World");
}

else {
    console.log("Goodbye World");
}

//4. NaN, null, empty string, 0, false
//5. Condition 5. 
let number1 = 8;
let number2 = "9";

if("0" === 0){ //the string of 0 !== the number 0
    console.log("condition 1 is true")
}else if(number1 > number2){ //8 is not > 9
    console.log("condition 2 is true")
}else if(typeof number2 === "number"){ //string !== the string 'number'
    console.log("condition 3 is true")
}else if(typeof number2 !== "number" && number1 > number2){ //8 is not > 9
    console.log("condition 4 is true")
}else if("0" == 0){ //the double = converts the 0 into a string
    console.log("condition 5 is true")
}else{
    console.log("no condition was true")
}
//6. == will do funky things like trying to convert a number into a string. === is safer to use

let addButter = true;
let popcorn = (addButter) ? "The popcorn is delicious!": "The popcorn is good but could use some butter :(";

// if(addButter) {
//     popcorn = "The popcorn is delicious!";
// } else {
//     popcorn =  "The popcorn is good but could use some butter :("
// }

console.log( popcorn );

//8. I did not get tickets b/c !soldOut = false
// let soldOut = true;
// let onSale = true

// let message = (!soldOut && onSale) ? "I got tickets!" : "I did not get tickets";

// console.log(message);

let soldOut = true;
let onSale = true;
let message = "";

if (!soldOut && onSale) {
    message = "I got tickets!";
}
else {
    message = "I did not get tickets";
}

console.log(message);
*/

//Loops

for (let count = 0; count <= 100; count++) {
    console.log(count);
}

for (let count = 0; count <= 100; count += 2) {
    console.log(count);
}

for (let count = 100; count >= 0; count--) {
    console.log(count);
}

for (let count = 0; count <=50; count++) {
    if (count % 2 != 0 && count % 5 === 0) {
        console.log(count);
    }

}
//for version
// let total = 0;
// for (let count = 0; count <=10;count++) {
//     total += 3;
// }

// console.log(total);

//while version
let total = 0,
    count = 0;

while (count <=10) {
    total += 3;
    count++;
}
console.log(total);

for (let i = 1; i <=100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}

//9. do...while() makes it so that the thing that needs to happen happens at least 1x, vs. whiel and for has the conditions set before so it may not run at all