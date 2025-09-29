const max = prompt("enter the number");
// console.log(max);

const random = Math.floor(Math.random()*max)+1;
// console.log(random);

let guess = prompt('guess the number');
while(true){
    if(guess == "quit"){
        console.log("you quit");
        break;
    }
    if(guess == random){
        console.log("Congrats!! you guessed it right!");
        break;
    }else if(guess <random){
        guess = prompt("too small");
    }else{
        guess = prompt("too big");
    }
    // }else{
    //     guess = prompt("Oops, wrong guess!");
        
    // }
}


