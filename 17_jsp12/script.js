async function greet(params) {
    return "hello world";
    
}
let h1 = document.querySelector("h1");

function changeColor(color, delay){
   return new Promise((resolve, rejected)=>{
        setTimeout(()=>{
        h1.style.color = color;
        resolve("color changed");
    }, delay);
    })
  
}
//handling await
async function optColor(){
    try{
    await changeColor("red", 1000)
    await changeColor("green", 1000)
    await changeColor("blue", 1000)
    await changeColor("yellow", 1000)
    }
    catch(err){
        console.log("error caught");
        console.log(err);      
    }
}

// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data received ✅");
//     }, 2000);
//   });
// }

// async function getData() {
//   console.log("1. Fetching data...");

//   const result = await fetchData(); // waits for promise to finish

//   console.log("3. Result:", result);
// }

// console.log("0. Start");
// getData();
// console.log("2. Other code running...");

// changeColor("red", 1000)
// .then(()=>{
//     console.log("red done");
//     return changeColor("orange",1000);
// })
// .then(()=>{
//     console.log("orange done");
//     return changeColor("green",1000);
// })
// .then(()=>{
//     console.log("green done");
//     return changeColor("blue",1000);
// })
// .then(()=>{
//     console.log("blue done");   
// })
// .catch(()=>{
//     console.log("request rejected");
    
// })