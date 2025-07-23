//   
var myAge = 20;
console.log( myAge);
// data types define the type of values that a varoable can hold
// Primitive data types
// 1. Number: represents numeric values, including integers and floating-point numbers.
// var num = 5;
// console.log(num);
 
// 2. String: Represnts sequence of characters enclosed in a single or double qoutes.
// var myname = "Anjali";
// console.log(myname);

// 3. Boolean: represents logical entity T or F
// var isRaining = "true";
// console.log(isRaining);

// 4. Undefined: Refresents the absence of a value or undefined variable
// var Anjali;
// console.log(Anjali);

// 5. Null: Represents the absence of a value. it is often used to explicitly indicate that a variable or object properly has no assigned value

// var Memos = null;
// console.log(Memos);

// 6. BigInt:Represents integers of arbitrary precision
// const bignum = 123456713141515166547984562016334091285309637;
// console.log(bignum);
 

// undefined: box isnt opened yet
// null: an expty box;

// var name = "Anjali";
// console.log(name);
// console.log(typeof name);

// 
// CONVERT STRING TO A NUMBER
// var mynum = "10";
// console.log(typeof mynum); 
// console.log(typeof +mynum);
// console.log(typeof Number(mynum));

// CONVERT NUMBER TO STRING
// let str = 5;
// console.log(typeof str);
// console.log(typeof String(str));
// console.log(typeof (str+ " "));

// check for 0 null and -ve value
// var myname = "Anjali";
// var myname1 = "";
// if(myname1){
//     console.log("this is truth ");   
// }else {
//     console.log("its false");
    
// }

// ParseInt and ParseFloat
// parseint and parsefloat are both functions in javascript used for converting strings to numbers, but they have different use cases.

// ParseInt: it is used to parse a string and convert into number integer
// const myString = "42";
// const myNUm = parseInt(myString);
// console.log(myNUm);
// console.log(typeof myNUm);

// ParseFloat: it is used to parse a string and convert into floating-point integer
// const myString = "42.55";
// const myNUm = parseFloat(myString);
// console.log(myNUm);
// console.log(typeof myNUm);

// ParseInt converts integers & ignores after decimal points
// ParseFloat converts Floats & preserve after decimal points

// console.log(parseInt("123" , 10));
// console.log(parseInt("  123"));
// console.log(parseInt("123"));
// console.log(parseInt("077"));
// console.log(parseFloat("077"));
// console.log(parseInt("1.9"));
// console.log(parseFloat("1.9"));
 
// NaN- not a number is returned when a mathematical operation doesnt yeild a valid mumber
// console.log(parseInt("xyz"));

// console.log(isNaN("anjali"));
// console.log(isNaN("5"));

//  console.log(parseInt("xyz"));
//  console.log(parseInt("@%&"));

//  if(NaN == NaN){
//     console.log("both are equal");  
//  }else{
//     console.log("not equal");
    
//  }
//  output is not equal because at the backside nan might have diff vallues

// concatenation
// const str = "Hello " + "world";
// console.log(str);
    
   
// tricky qs
// let sum = "5" - 5;
// let sum = "5" + 10;
// console.log(sum);

// console.log(10 + "20");
// console.log(9 - "5");
// console.log("java" + "Script");
// console.log(" " + " ");  
// console.log(" " + 0);
// console.log("java" - "Script");
// console.log(true + false);
// console.log(true + true);
// console.log(false + false);
// console.log(true - false);

// operators
// arithmetic
var x = 5;
var y = 9;
var res = x+y;
var res1 = y-x;
console.log(res1);




  

  