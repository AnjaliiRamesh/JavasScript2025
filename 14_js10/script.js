// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function(){
//     // console.log("button was clicked");
//     // alert("button was clicked");  
// }

// function greet(){
 // console.log("sayHellow");

// }
// btn.onclick = greet;

// let btns = document.querySelectorAll("button");

// for (btn of btns){
//     btn.onmouseenter = function(){
//         // console.log("you entered");  
//     };
//     btn.onclick = greet;
//     btn.onclick = sayHi;

//     console.dir(btn);
    
// }

// for(btn of btns){
//     // btn.addEventListener("click", sayHi);
//     // btn.addEventListener("click", greet);
//     btn.addEventListener("dblclick", function(){
//         console.log("double clicked");
        
//     })
// }
// function sayHi(){
//     console.log("multipls buttons wer clicked");
    
// } 
// function greet(){
// console.log("sayHellow");

// }

// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h3 = document.querySelector("h3");


//not a good idea very much repeated
// btn.addEventListener("click", function(){
//     // console.log(this);
//     // console.dir(this);
//     console.dir(this.innerText);
//     this.style.backgroundColor = "pink";
    
// })
// p.addEventListener("click", function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "green";
    
// })
// h3.addEventListener("click", function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "yellow";
    
// })


//optimized
// function changeColor(){
//      console.dir(this.innerText);
//     this.style.backgroundColor = "pink";
// }
// h3.addEventListener("click", changeColor);
// p.addEventListener("click", changeColor); 
// btn.addEventListener("click", changeColor);


// KEYBOARD EVENTS
// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     console.log("button clicked!");
    
// });

// let inp = document.querySelector("input");
// inp.addEventListener("keyup" ,function(event){
//     // console.log(event);
//     console.log(event.key);
//      console.log(event.code);
//     // console.log("key was released");
    
// });
// inp.addEventListener("keydown" ,function(){
//     console.log("key was pressed");
    
// });

//FORM EVENTS

let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    // alert("submitted!!");
    // let inp = document.querySelector("#pass");
    // let sub = document.querySelector("#sub");
    let pass = this.elements[0];//form.elements[0]
    let sub = this.elements[0];

    console.log(pass.value);
    console.log(sub.value);

    
})

