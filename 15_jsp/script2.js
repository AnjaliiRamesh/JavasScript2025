let gameSeq = [];
let userSeq = [];

let started = false;
let level =0;

let btns = ['green', 'yellow','red', 'blue'];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
    console.log("gameStarted");
    started = true;
    }
    levelUp();
    
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout (function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout (function(){
        btn.classList.remove("userFlash");
    },250);
}

function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;


    let ranInd = Math.floor(Math.random() * 4);
    let ranColor = btns[ranInd];
    let ranBtn = document.querySelector(`.${ranColor}`)

    gameSeq.push(ranColor);
    console.log(gameSeq);
    
    // console.log(ranInd);
    // console.log(ranColor);
    // console.log(ranBtn);
    
    btnFlash(ranBtn);
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    // console.log("button pressed");
    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    
    
}

let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click", btnPress)
}

