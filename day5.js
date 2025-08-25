const score = 400 //considers itself as number
// console.log(score);

const balance = new Number(100)//you will get to see number datatype mentioned
// console.log(balance);

// console.log(balance.toString().length);//converts to string
// console.log(balance.toFixed(1)); //shows fixed value rather than decimal like (100.0) than (100.1)

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4));//make sure uk deci ke pejle utni hi value aayegi

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); neg becomes pos
// console.log(Math.round(4.6));// gives round value like 4.6 => 5
// console.log(Math.ceil(4.2)); // choose top value agar ek point bhi jyada h int this case 4.2 => 5
// console.log(Math.floor(4.9));// choose the value before deci 4.6 => 4
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); //value of random will be btwn 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)