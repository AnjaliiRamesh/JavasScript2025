const student = {
    name : "anjali",
    age : 20,
    eng : 34,
    math: 89,
    phy : 78,
    chem : 89,
    getAvg(){
        // let avg = (eng + math+ chem)/3;
        //kisi func ke andar agar uske parameter ko access karna h to "this" use karna padega
        //this batata h ki konse object isse call kar rhi h usse obj ko refer karega jo isse execute kara rhi h
        console.log(this); 
        // let avg = (this.eng + this.math+ this.chem)/3;
        // console.log(avg);
        
    }

}

// console.log("print1");//print1
// console.log("print1");//print1
// console.log(a); // error throw karega to aage ke statements work nhi karenge
// console.log("print2");
// console.log("print2");
// console.log("print3");

// console.log("print1");//print1
// console.log("print1");//print1

// try{
//     console.log(a);//nhi chalega
    
// }
// catch{
//     console.log("error cought a is not defined"); //print karega
    
// }
// console.log("print2");//print2
// console.log("print2");//print2
// console.log("print2");//print2

// console.log("print1");//print1
// console.log("print1");//print1
// let a =10;
// try{
//     console.log(a); //10
    
// }
// catch{
//     console.log("error cought a is not defined"); //chalega hi nhi
    
// }
// console.log("print2");//print2
// console.log("print2");//print2
// console.log("print2");//print2

// console.log("print1");//print1
// console.log("print1");//print1

// try{
//     console.log(a); //chalega hi nhi
    
// }
// catch(err){
//     console.log("error cought a is not defined"); 
//     console.log(err); 
// }
// console.log("print2");//print2
// console.log("print2");//print2
// console.log("print2");//print2

//no arguemts
const hello = () =>{
    return("hello word")
}
//single arguments
const cube = (n) =>{
    return n*n*n;
}
//multiple arguments
const power = (a,b) =>{
    return a**b;
};

//implicit arrow function used for single statements
const mul = (a,b) => (a*b);

// console.log("hi");

// setTimeout(function, 5000) 
// setTimeout(() =>{
//     console.log("Apna college");
    
// },3000)
// console.log("welcome to");

let id = setInterval(() =>{
    // console.log("Anjali");
    
},1000);
// clearInterval(id);

const sqr = (n) =>{
    return n*n;
}
// console.log(sqr(3));


let greet = setInterval(() =>{
    console.log("Hello"); 
},2000)

setTimeout(()=>{
    clearInterval(greet)
    console.log("stopped after 10 sec");   
},10000)