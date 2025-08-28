// let a = 10;
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);

let a = 300
if (true) {
    let a = 10
    const b = 20
    //var c = 30 // awara kahi ka bahar bhi muh marega bilkul uske jaisa
    // console.log("INNER: ", a); 
}

/************ Nesred scope **************/
function one(){
    const username = "anjali"

    function two(){
        const website = "instagram"
        console.log(username);    
    }
    //console.log(website);
    two()
    
}
// one()

/* 
You have two functions: one() and two().
username is declared inside one().
website is declared inside two().

Rule: inner functions can access variables from their outer functions (closure), but outer functions cannot access variables inside inner functions.

That’s why:
console.log(username) inside two() → ✅ works, prints "anjali".
console.log(website) inside one() → ❌ error, because website is not in that scope.

So when you run one(), it fails at console.log(website) and never reaches the call to two().
*/

// if(true){
//     const username1 = "anjali"
//     if(username1 === "anjali"){
//         const website1 = " utube"
//         console.log(username1 + website1);
//     }
//     // console.log(website1);
    
// }
// console.log(username1);


/*

Function Declarations (like function addone() {}) are hoisted completely.
Hoisting means JavaScript moves function declarations to the top before execution.
Function Expressions (like const addTwo = function(){} or arrow functions) are not hoisted in the same way. You can only use them after they are defined.

👉 Easy shortcut rule:
function foo() {} → ✅ can call it before it’s defined.
const foo = function(){} / const foo = () => {} → ❌ must define first, then call.

*/

console.log(addone(5))

function addone(num){
    return num + 1
}

addTwo(5)
const addTwo = function(num){
    return num + 2
}