const score=500;
console.log(score);
const balance=new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNUmber=123.8966;
console.log(otherNUmber.toPrecision(3));
console.log(otherNUmber.toPrecision(2));

const hundreds=100000;
console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++++++++MATHS+++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-3));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.round(Math.random()*10)+1);

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);//for a ranged random values