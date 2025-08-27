function MyName(){
    console.log("A");
    console.log("N");
    console.log("J");
    console.log("A");
    console.log("L");
    console.log("I");
}

// MyName()
// function addition (num1, num2){ // parameters => fun ki def batata h
//     console.log(num1 + num2);
    
// }
//addition(2, 4)//arguments => func ko call karte waqt jo values dalte h they are arguments

function addition (num1, num2){ // parameters => fun ki def batata h
//    let result = num1 + num2
//    return result
      return num1 + num2
}
const result = addition(4,5)
// console.log("result: ", result);

function loginUserMessage(username = "anj"){//agar user ne in anycase value na dali to use this default vaue
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
// loginUserMessage("anjali") //prints nothing as you didnt ask to
// console.log(loginUserMessage("anjali"))


/*************Function with Objects**************/
//rest operator and spread operator
// function calculatePrice(...num1){
//     return num1
// }
function calculatePrice(val1, val2, ...num1){
    return num1
}
// console.log(calculatePrice(200, 400, 500, 5000));

// val1 => 200, val2 => 400 and rest will go to num


const user = {
    username: "anjali",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}
// handleObject(user)


handleObject({
    username: "anj",
    price: 299
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));