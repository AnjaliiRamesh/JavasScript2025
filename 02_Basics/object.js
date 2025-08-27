//object literals
const mysym = Symbol("key1")
const jsUser = {
    name : "Anjali",
    "full name" : "anjali gupta",
    [mysym] : "mykey",
    age : 18,
    city : "mumbai",
    email : "anjali@google.com",

}
//accessing object
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mysym]);

//updating object
jsUser.email = "anjali1234&gmail.com"
//Object.freeze(jsUser) //this stops from making change in the object
jsUser.email = "anjali@gmail.com"
// console.log(jsUser);

jsUser.greeting = function(){
    // console.log("hiii helloe");    
}
// console.log(jsUser.greeting());

//in order to refer to same object we use this keyword
jsUser.greetingtwo = function(){
    console.log(`hiii helloe, ${this.name}`);    
}
// console.log(jsUser.greetingtwo());



/*********** object part 2 *************/

//object singleton
// const InstaUser = new Object()
const InstaUser = {} //non-singleton object
InstaUser.name = "anjale"
InstaUser.id = "123abc"
InstaUser.isLoggedIn = false
// console.log(InstaUser);

const regularUser = {
    email :" anjali1234@gmail.com",
    fullName: {
        username: {
            firstName : "anjali",
            lastName : "Gupta"
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.username);
// console.log(regularUser.fullName.username.lastName);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4:"d"}
// const obj3 = {obj1, obj2}

// {} nhi daala to sara kuch that is obje 2 obj1 ko taget manke usme hi chala jayega better aap empty daal do so that sare object ek naye empty arrazy me jaye
// const obj3 = Object.assign({},obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// console.log(InstaUser);
// console.log(Object.keys(InstaUser));//gives array output
// console.log(Object.values(InstaUser));

// console.log(InstaUser.hasOwnProperty('isLoggedIn'));//checks if value exists

/************ Object Part3 ************/

//DESTRUCTURING
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "anjali"
}

// course.courseInstructor
const {courseInstructor: instructor} = course //destructured that is courseInstructor was a big name so i renamed it as instructor

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "anjali",
//     "coursename": "js in hindi",
//     "price": "free"
// }






