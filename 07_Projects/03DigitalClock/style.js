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


/*
✅ Key differences

Syntax:
querySelector('#clock') → requires #
getElementById('clock') → just the id name

Flexibility:
querySelector → can select by id, class, tag, attribute, complex CSS
getElementById → only by id

Performance:
getElementById is slightly faster (direct lookup), but difference is negligible in small projects.

Return:
Both return the element (or null if not found).

👉 In short:
Use getElementById('clock') when you’re only selecting by id.
Use querySelector('#clock') when you might want more flexible selectors.

*/
