"use strict";


//can use sigle'' , double""", or backticks``
//semicolon is not necessary
// console.log("helloworld");

//variables
// var firstName = "Anjali";
// console.log(firstName);
// firstName = "neha";
// console.log(firstName);

//rules for naming variable

//cant start with number
//eg: 1value is invalid
//      value1 is valid

//underscore or dollar can only be used
// first_name;
// _firstname;

//spacing is not allowed
// fisrt name

//start with small letteer or camelcase (FirstName)




//let keyword
//lett helps you avoid unnecessary double declaration
let firstName = "anjali";
console.log(firstName);

//declare const 
const pi = 3.14;
console.log(pi);


//string indexing
// String indexing 

let firstName = "anjalidfjakldsfdf";

//  a    n   j   a   l   i    
//  0    1   2   3   4   5   


console.log(firstName.length);//for length of the string
console.log(firstName[0]);


console.log(firstName[firstName.length-2]);

// last Index : length - 1 
//sec last index: length-1


// trim() 
// toUpperCase()
// toLowerCase()
// slice()

let firstName = " Anjali  ";

// console.log(firstName.length);
// firstName = firstName.trim(); // "Anjali"
// console.log(firstName)
// console.log(firstName.length);
// firstName = firstName.toUpperCase();
// firstName = firstName.toLowerCase();
// console.log(firstName);

// start index 
// end index

let newString = firstName.slice(1); // hars
console.log(newString);