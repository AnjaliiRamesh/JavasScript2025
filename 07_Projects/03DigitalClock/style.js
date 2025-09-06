//you can choose either of them ie queryselector or getelementbyid

// const clock = document.querySelector('#clock')
const clock = document.getElementById('clock');

//1000ms => is 1s
// is here m asking ki i want to update my time at every one sec. if i wrote 2000 it would change at every 2sec
setInterval(function() {
let date = new Date();
// console.log(date.toLocaleTimeString());
clock.innerHTML = date.toLocaleTimeString();
} ,1000);
// } ,2000);
