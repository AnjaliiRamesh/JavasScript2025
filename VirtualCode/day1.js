var person = {
    firstName : "anjali",
    lastName : "Gupta",
    age: 21,
    stock: true
}
/*
console.log(person)

dot notation
console.log(person.age)

bracket notation
console.log(person['firstName'])



var caption = {
    firstName : "anjali",
    lastName : "Gupta",
    age: 21,
    friend: ['mannya', "pushpa", "neha"],

    address:{
        state: "Mumbai",
        city: {
            name: "Vasai",
            pincode: "401202"
        }
        
    }
}

// console.log(caption.friend[1]);

// console.log(caption.address.city.name) ;

caption.fav = ['momos','panipuri','manchurian']

delete caption.firstName
console.log(caption);



var num = [2,3,4,5,6,7,8];
var squaredArray = [];

for(var i=0; i<num.length; i++){
    squaredArray.push(num[i]*num[i]);
}
console.log(squaredArray);
 

//for-in loop
var colors = {
    primary: 'blue',
    secondary: 'green',
    tertiary: 'white'
}

for(var color in colors){
    // console.log(colors[color]);
    console.log(color + ' -> ' + colors[color]);
}



var colorsArr = ['yellow', 'green', 'orange', 'pink']

for(var color in colorsArr){
    // console.log(colorsArr[color])
    console.log(color + ' -> '+colorsArr[color])
}


//For-of

var colorsArr = ['yellow', 'green', 'orange', 'pink']

for(var [index, color] of colorsArr.entries()){
    console.log(color)
    // console.log(index + ' -> '+color)
}

*/  

// In JavaScript, 02 is simply interpreted as the number 2.

// The leading zero does not change the value.

// So internally it becomes: 2==2

let num1=2;
let num2=02;
if(num1==num2)
 console.log("true");
else
 console.log("false");