


/*
| Operator | Meaning                         | Example     | Result  |
| -------- | ------------------------------- | ----------- | ------- |
| `==`     | Equal to (values only)          | `5 == "5"`  | ✅ true  |
| `===`    | Strict equal (value + type)     | `5 === "5"` | ❌ false |
| `!=`     | Not equal (values only)         | `5 != "5"`  | ❌ false |
| `!==`    | Strict not equal (value + type) | `5 !== "5"` | ✅ true  |
| `>`      | Greater than                    | `10 > 5`    | ✅ true  |
| `<`      | Less than                       | `3 < 7`     | ✅ true  |
| `>=`     | Greater than or equal           | `5 >= 5`    | ✅ true  |
| `<=`     | Less than or equal              | `4 <= 6`    | ✅ true  |

*/
const isLoggedin = true
// const temp = 43;
// if(temp <50){
//     console.log("less than 50");
// }else{
//     console.log("temp is greater than 50");
// }

// const temp = 43;
// if(temp <50){
//     const temp1 = 100
//     console.log(`current temp is ${temp1}`);
// }


// console.log(`current temp is ${temp1}`);
const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");//not a good practice

// if (balance < 900) {
//     console.log("less than 500");
// } else if (balance < 1050) {
//     console.log("less than 750");
    
// } else if (balance < 1000) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }
/************* &&-statements *************/
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}