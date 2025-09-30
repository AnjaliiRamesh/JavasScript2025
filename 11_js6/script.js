
function poem() {
    console.log("twinkle twinkle little start");
    console.log("how i wonder what you are");
    console.log("up above the world so high");
    console.log("like a diamond in the sky");

}
// poem();

function validAge(age){
    // let age = 13;
    if(age>19){
        console.log("valid");
        
    }else{
        console.log("not valid");
        
    }
}
// validAge(29);

// create a function to roll a dice
function dice() {
    let random = Math.floor(Math.random()*6)+1;
    // console.log(Math.floor(Math.random()*6)+1);
    console.log(random);  
}
// dice();
//function arguments are stored in order
function printInfo(name,age){
    let inf = `${name}'s age is ${age}`;
    console.log(inf);
    
}
// printInfo("anjali",21);
// printInfo("anjali");
// printInfo(21);


//create a function to give average of three numbers

function average(n1, n2, n3){
    let avgSum = (n1+n2+n3)/3;
    console.log(avgSum);
    
}
// average(3,4,5);

//create a function to write a multiplication of a table

function multiplication(n){
    for(let i=n; i<=n*10; i=i+n){
        console.log(i);    
    }
}
// multiplication(5);
// multiplication(10);
// multiplication(7);

function sum(a, b){
    // console.log("print 1");
    // console.log("print 2");
    return a+b;
    console.log("print 3");
    console.log("print 4");
}
//return statement ke baad koi statement execute nhi hoti they are unreachable
//sum(3,4); //yaha pe value sirf return ho rhi h print nhi ho rhi

// console.log(sum(3,4));//yaha print ho rhi h
// let s = sum(9,4);
// console.log(s);


//create function that returns sum of 1 to n numbers

function sumOfn(n){
    let sum =0;
    for(let i=1; i<=n; i++){
        sum = sum + i;
    }
    return sum;
}

// console.log(sumOfn(5));

//create a function that returns the concatenation of all the strings in an array;

let str = ["hi","hello", "bye", "!"];

function concatString(str){
    let result = "";
    for(let i=0; i<str.length; i++){
        result += str[i];
    }
    console.log(result);
    
}
// console.log(concatString(str));

// let s = concatString(str);
// console.log(s);


function outerFun(){
    let x =5;
    let y = 12;
    function innerFun() {
        console.log(x);
        let a = 10;
    }
    innerFun();
    // console.log(a); //cannot be accessed
    
}
// outerFun();
// innerFun(); innerFun cannot be called outside the function

const calculator ={
    add : function(a,b){
        return a+b;
    },
    sub : function(a,b){
        return a-b;
    },
    mul : function(a,b){
        return a*b;
    }
}
const calculator1 ={
    add (a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    }
}