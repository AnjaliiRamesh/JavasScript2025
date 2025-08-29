const UserId = 1213476
let UserEmail = "anjali@gmail.com" 

/*var is not preferred as it doesnt follow scope rule lets say u changed a var named userpass what it does is that it changes in every block where you named userpass but what you wanted is to change only in the current thin m working on to */
var UserPass = "12345" 
UserCity = "mumbai" //although it works but is not a good practice

// if you do not pass a value to a variable it will be declared as undefined
let UserState; 


// console.log(UserId);
//const doest allow changing values later it is fixed
// UserId = 43256 
UserEmail = "abc@gmail.com"
UserPass = "54321"
UserCity = "gurgaon"
console.table([UserId, UserEmail, UserPass, UserCity, UserState]);
