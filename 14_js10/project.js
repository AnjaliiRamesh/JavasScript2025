// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     let h3 = document.querySelector("h3");
//     let random = getRandomcolor();
//     h3.innerText = random;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = random;
//     console.log("color updated");
    
// })

// function getRandomcolor() {
//     let red = Math.floor(Math.random()* 255);
//     let green = Math.floor(Math.random()* 255);
//     let blue = Math.floor(Math.random()* 255);
//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }


let para = document.querySelector("p");
para.addEventListener("click", function(){
    console.log("paragraph clicked ");
    
})

let box = document.querySelector(".box");
box.addEventListener("mouseenter", function(){
    console.log("you entered in box");
    
})