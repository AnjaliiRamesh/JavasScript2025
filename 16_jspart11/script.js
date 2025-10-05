//CALLBACK HELL
// function savetoDb(data, success, failure){
//     let internetSpped = Math.floor(Math.random()*10)+1;
//     if(internetSpped>4){
//         success();
//     }else{
//         failure();
//     }
// }

// savetoDb("apna college", ()=>{
//     console.log("data saved");
//     savetoDb("hello world", 
//     ()=>{
//         console.log("success: data 2 saved");    
//     },
//     ()=>{
//         console.log("failure : data 2 not saved");
//     }
// );
// }, 
// ()=>{
//     console.log("data not saved", );
    
// })

// function savetoDb(data){
//     return new Promise((success, failure)=>{
//     let internetSpped = Math.floor(Math.random()*10)+1;
//     if(internetSpped>4){
//         success("success: data saved");
        
//     }else{
//         failure("failure: data not saved");
        
//     }
//     });
  
// }

// let request = savetoDb("anjali gupta");
// request.then(()=>{
//     console.log("promise resolved");
//     console.log(request);
    
// }).catch(()=>{
//     console.log("promise unresolved");
//     console.log(request);
    
// })

// optimize
// savetoDb("anjali gupta").then(()=>{
//     console.log("promise resolved");
    
// }).catch(()=>{
//     console.log("promise unresolved");
    
// // })

// promischaining
// savetoDb("anjali gupta")
// .then((result)=>{
//     console.log("data1 saved");
//     console.log(result);
    
//     return savetoDb("hello world");
// })
// .then((result)=>{
//     console.log("data2 saved");
//     console.log(result);

//     return savetoDb("hello mannya");
// })
// .then((result)=>{
//     console.log("data3 saved");
//     console.log(result);
    
// })
// .catch((error)=>{
//     console.log("data rejected");
//     console.log(error);
    
// })


// let h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColor){
//     setTimeout(()=>{
//         h1.style.color = color;
//         if(nextColor) nextColor();
//     }, delay);
// }
// changeColor("red", 1000, () =>{
//     changeColor("orange", 1000, () =>{
//         changeColor("green", 1000, () =>{
//             changeColor("yellow", 1000, () =>{
//                 changeColor("blue", 1000)
//             })
//         })
//     })
// })

let h1 = document.querySelector("h1");

function changeColor(color, delay){
   return new Promise((resolve, rejected)=>{
        setTimeout(()=>{
        h1.style.color = color;
        resolve("color changed");
    }, delay);
    })
  
}
changeColor("red", 1000)
.then(()=>{
    console.log("red done");
    return changeColor("orange",1000);
})
.then(()=>{
    console.log("orange done");
    return changeColor("green",1000);
})
.then(()=>{
    console.log("green done");
    return changeColor("blue",1000);
})
.then(()=>{
    console.log("blue done");   
})
.catch(()=>{
    console.log("request rejected");
    
})