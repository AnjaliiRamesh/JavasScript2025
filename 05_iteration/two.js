
let index = 0
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    //console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}

let score = 11

do {
    // console.log(`Score is ${score}`);
    score++
} while (score <= 10);



/************** Day 3 *************/
// for of

// ["", "", ""]
// [{}, {}, {}]

const arr1 = [1, 2, 3, 4, 5]
// for(const iterator of object)
for (const num of arr1) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

// Maps => unique values & key value pairs in same order no duplicate values

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for(const key of map){
    console.log(key);  
}

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// objects are not iterarble using for of loop but can be done through for in loop
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }