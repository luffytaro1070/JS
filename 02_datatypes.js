"use strict";//treat all js code as newer version
console.log(typeof undefined);//undefined
console.log(typeof null);//object

let score="33a";
let valueInNumber=Number(score);
console.log(valueInNumber);// NaN
//"33"=>33
//"33abc"=>NaN
//true=>1;false=>0
let isLoggedIn="devanshu";
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);//true