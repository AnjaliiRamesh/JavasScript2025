
// const randomColor = function(){
//     const hex = "0123456789AB"
//     let color = "#";
//     for(let i =0; i<6; i++){
//         color += hex[Math.floor(Math.random() * 16)];
//     };
//     return color;
// }
// // console.log(Math.random() *16);
// // console.log(Math.floor(Math.random() * 16));
// // console.log(randomColor());
// let intervalId;
// const startChangingColor = function(){
//     if(!intervalId){
//     intervalId = setInterval(changebg, 1000);        
//     }
//     function changebg(){
//     document.body.style.backgroundColor = randomColor();
//     }
// };
// const stopChangingColor = function(){
//     clearInterval(intervalId);
//     intervalId = null;
// };
// document.querySelector("#start").addEventListener('click', startChangingColor);
// document.querySelector("#stop").addEventListener('click', stopChangingColor);

   
const randomColor = function () {
  const hex = "0123456789ABCDEF"; // fixed hex string
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const container = document.getElementById("container");

const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changebg, 1000);
  }
  function changebg() {
    container.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
