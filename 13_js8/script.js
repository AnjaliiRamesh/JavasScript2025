
let arr = [1,2,3,4,5];

let print = function(el){
    // console.log(el);
};
arr.forEach(print);

arr.forEach(function (el){
    // console.log(el);   
});

//arrow function
arr.forEach((el) =>{
    // console.log(el);   
});

//FOR EACH FOR OBJECTS
let Info = [
    {
        name : "Anjali",
        marks : 89
    },
    {
        name : "Abhi",
        marks : 100
    },
    {
        name : "Pushpa",
        marks : 67
    }
]

let gpa = Info.map((el) =>{
    // return el.marks/10;
});

Info.forEach((student) => {
    // console.log(student);
    // console.log(student.marks);
});

let num = [1,2,3,4,5];

let double = num.map((el) =>{
    // return el*2;
    // return el*el;

})

// let nums = [2, 3,5,6,8, 9,10,11,2,13]
let nums = [2, 1,6,8,10,2,-12]



// let evenAns = nums.filter((el) =>{
//     return el % 2 == 0;
// })

let evenAns = nums.every((el) =>{
    // return el % 2 == 0;
})

//check if numbers are multiple of 10
let arrnum = [10,20,30,22, 33,40,100]

let mul = arrnum.every((el) =>{

    return el % 10 == 0;
})

let finalVal = nums.reduce((res, el)=>{
    // return res+el;
})

// find maximum
let ans = nums.reduce((max, el) =>{
    if(max<el){
        return el;
    }
    else{
        return max;
    }
});
// console.log(ans);

//find minimum
// let ans1 = nums.reduce((min, el) =>{
//     if(min>el){
//         return el;
//     }
//     else{
//         return min;
//     }
// });
// console.log(ans1);


function getmin(nums){
    let ans1 = nums.reduce((min, el) =>{
    if(min>el){
        return el;
    }
    else{
        return min;
    }
});
// return ans1;
}

// default parameter

function sum (a=1,b){
    return a+b;
}
// console.log(sum);
// console.log(sum(1,2));//3
// console.log(sum(1)); //4
// console.log(sum(1)); //a=>1 b=> undefined coz of order of parameter rule 

//spread operator expands iterable into individual multiple values

// console.log(..."anjali");
// console.log(...nums);

let even = [2,4,6,8]
let odd = [1,3,5,7,9]
let com = [...even, ...odd]
// console.log(com);


let char = ["anjali"]
let newchar = [...char];
// console.log(newchar);
// console.log(..."anjali");

const data = {
    name : "anjali",
    marks : 12
}

const datacopy = {...data, id: 123};
// console.log(datacopy);
// console.log(data);

function sum(...args){
    for(let i=0; i<args.length; i++){
        // console.log("you gave value: " ,args[i]);
        
    }
}


let names = ['anjali', 'abhi', 'annu', 'pushpa', 'mannya']
// let winner = names[0];
// let runnerUP = names[1];
// let secondrunner = names[2];

let [winner, runnerUP,secondrunner,] = names;
//remaining will be stored in others 
// let [winner, runnerUP,secondrunner, ...others] = names;

const student = {
    name : "anjali",
    age : 13,
    class : 9,
    subjects : ['hindi', 'maths', 'phy', 'chem'],
    username : "anjali@1234",
    password : "abcd"
}
//not feasible when i want to access lots of data
// let username = student.username;
// let password = student.password;

// so comes destructuring

// let{username, password} = student;
//lets suppose you want to store your username in other variable in that case
//now if i search for user i will get my username before it was not possible
// let{username: user, password} = student;

//let suppose if a particular property is not there 
// let {username, password, city} = student;
// if i console city i will get undefined so i will add default city that will take its place if its not already there
let{username, password, city = "mumbai"} = student;

