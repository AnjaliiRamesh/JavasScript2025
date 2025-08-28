//this refers to currents context/value

const user = {
    username: "anjali",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }

}
// user.welcomeMessage()
// user.username = "pihu"
// user.welcomeMessage()
// console.log(this);

// function coffee(){
//     let username = "kafka"
//     //console.log(this);
//     console.log(this.username);

// }
// coffee()

// const coffee = function(){
//     let username = "kafka"
//     //console.log(this);
//     console.log(this.username);

// }
// coffee()

const coffee = () =>{
    let username = "kafka"
    //console.log(this);
    console.log(this.username);

}
//coffee()

// {} user return staments
// () no need for return statements

const addTwo = (num1, num2) => {
    return num1 + num2
}
// console.log(addTwo(3, 4))


// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwothree = (num1, num2) => ({username: "anjali"})


console.log(addTwothree())


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()




// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('anjali')
