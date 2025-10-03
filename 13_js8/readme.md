map hame ek naya array create karke deta h of same size;
let double = num.map((el) =>{
    return el*2;
})

filter -> naya array create karke deta h but isme conditions hoti h agar callback => true ho jaye to elements print karke de degi else nhi karegi
let evenAns = nums.filter((el) =>{
    return el % 2 == 0;
})


every => t or f me value return karta h only after checking the whole condition like logical &&

reduce => reduce() is an array method in JavaScript that takes all elements in an array and reduces them to a single value (like sum, product, max, min, etc.) by applying a function step by step.
array.reduce(callback, initialValue)
callback → function that runs on each element.
It takes mainly 2 arguments:
accumulator → stores the result (carries over each step).
currentValue → the current element in the array.

initialValue → starting value for the accumulator (optional).

spread operator expands iterable into individual multiple values spread karna into multiple values
📌 Difference between map, filter, and reduce in JavaScript
1. map()
Transforms each element of the array and returns a new array (same length).
You use it when you want to apply some operation on every element.
✅ Example: double each number

const nums = [1, 2, 3, 4];
const doubled = nums.map(x => x * 2);
console.log(doubled); // [2, 4, 6, 8]

2. filter()
Returns a new array containing only elements that pass a condition (may be shorter than original).
You use it when you want to select a subset of elements.
✅ Example: keep only even numbers

const nums = [1, 2, 3, 4];
const evens = nums.filter(x => x % 2 === 0);
console.log(evens); // [2, 4]

3. reduce()
Reduces the whole array into a single value (number, string, object, etc.).
You use it when you want a summary of the array.

✅ Example: sum of numbers

const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10


rest operator kya karega ki it allows a function to take indefinite number of arguments and bundle them in array

destructuring => storing values of arrays in multiple variables
Instead of writing long code to pick values, destructuring gives you a shortcut.
const arr = [10, 20, 30];
const a = arr[0];
const b = arr[1];
const c = arr[2];

console.log(a, b, c); // 10 20 30

//Destructuring
const [a, b, c] = [10, 20, 30];
console.log(a, b, c); // 10 20 30
👉 You can also skip values:
const [x, , z] = [1, 2, 3];
console.log(x, z); // 1 3

QuerySelector allows us to use css 
document.querySelector("p")//selects first p
document.querySelector("#myId")//selects first element with id name "myId"
document.querySelector(".myclass")//selects first element with class name "myclass"
document.querySelectorAll("p")//this will select all the p tags will give in the form of nodelist

innerText => shows all the visible text
1. innerText
Gives the visible text of an element (what you actually see on the screen).
It ignores hidden elements (like with display: none or visibility: hidden).
It triggers reflow (slower, because it checks CSS and layout).

Example:
<div id="box">
  Hello <span style="display:none;">World</span>
</div>
<script>
  console.log(document.getElementById("box").innerText); 
  // Output: "Hello"
</script>

textContext => shows full contents like the once that were hidden
Gives the raw text content, without caring about styles (hidden text is also included).
Much faster than innerText (does not calculate CSS).
Safer to use when you just want the text.

Example:

<div id="box">
  Hello <span style="display:none;">World</span>
</div>
<script>
  console.log(document.getElementById("box").textContent); 
  // Output: "Hello World"
</script>

innerHTML => shows the fullMarkup
Gives the HTML inside the element, not just text.
You can also set HTML with it (but it can be unsafe if content is user-generated → XSS risk).

Example:

<div id="box">
  Hello <b>World</b>
</div>
<script>
  console.log(document.getElementById("box").innerHTML); 
  // Output: "Hello <b>World</b>"
</script>


🌟 What is classList?

It’s a property of DOM elements that gives you access to all the CSS classes of that element as a DOMTokenList (kind of like an array of classes).
With it, you can add, remove, toggle, or check classes easily without rewriting the whole className.

Example:
<div id="box" class="red big"></div>

<script>
  const box = document.getElementById("box");
  console.log(box.classList); 
  // Output: DOMTokenList ["red", "big"]
</script>

✅ Common Methods of classList
add() → adds a class
box.classList.add("rounded");
console.log(box.className); // "red big rounded"


remove() → removes a class
box.classList.remove("big");
console.log(box.className); // "red rounded"


toggle() → adds if not present, removes if present
box.classList.toggle("active"); // adds "active"
box.classList.toggle("active"); // removes "active"


contains() → checks if class exists
console.log(box.classList.contains("red")); // true
console.log(box.classList.contains("blue")); // false


replace() → replaces one class with another
box.classList.replace("red", "blue");
console.log(box.className); // "blue rounded"

⚡ Why use classList instead of className?
className → rewrites the whole class string (risk of overwriting).
classList → lets you manipulate individual classes safely.

Example:
// BAD (might remove existing classes accidentally)
box.className = "newClass";  
// GOOD (adds without affecting existing ones)
box.classList.add("newClass");


👉 In short:
classList is the modern, safer, and easier way to work with CSS classes in JavaScript.

createElement()->append();
button.setAttribute('id', 'btn');
input.setAttribute('placeholder', 'username');
button
<button id='btn> clickme! </button>
input
<input placeholder = "username">