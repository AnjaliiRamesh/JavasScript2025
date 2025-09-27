// for
// for(let inde = 0; inde < array.length; inde++){
//     const element = array[inde];
// }

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is best number");
//     }
//     console.log(element);
    
// }

// console.log(element);

// for (let i = 1; i <= 10; i++) {
//     // console.log(`Outer loop value: ${i}`);
//    for (let j = 1; j <= 10; j++) {
//     // console.log(`Inner loop value ${j} and inner loop ${i}`);
//     // console.log(i + '*' + j + ' = ' + i*j );
//    }
    
// }
// let myArray = ["flash", "batman", "superman"]
// //console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     // console.log(element);
    
// }


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected so stop at 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

// for (let index = 1; index <= 10; index++) {
//     if (index == 5) {
//         console.log(`Detected 5 continue`);
//         continue
//     }
//    console.log(`Value of i is ${index}`);
    
// }

// let a = "red";
// let b = "yellow";
// let c = "green";
// if(a){
//     console.log("stop"); 
// }
// if(b){
//     console.log("wait");
    
// }
// if(c){
//     console.log("go");
    
// }

// let color = "red";
// let color = "yellow";
// // let color = "green";
// if(color == "red"){
//     console.log("stop");  
// }
// if(color == "yellow"){
//     console.log("wait");  
// }
// if(color == "green"){
//     console.log("go");  
// }

// let price;
// // let size = "xl";
// // let size = "L";
// // let size = "M";
// let size = "S";

// if(size == "xl"){
//     console.log("price is 250");   
// }
// else if(size == "L"){
//     console.log("price is 200");   
// }
// else if(size == "M"){
//     console.log("price is 100");   
// }
// else{
//     console.log("price is 50");   
// }
// let good = "anjali";
// let good = "pushpanjali";
// if(good[0] == "a" && good.length >3){
//     console.log("good string");    
// }
// else{
//     console.log("poor string");    
// }
let firstName = prompt("enter first name");
let lastname = prompt("enter last name");
let msg = "welcome" + firstName + lastname+ "!";
alert(msg);