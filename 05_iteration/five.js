const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

//chaining
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);


/*
🔹 Difference between map(), filter(), and forEach()
1. map()
Creates a new array.
Transforms each element.
Always returns the same length as the original array.

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]

2. filter()

Creates a new array.
Keeps only the elements that pass a condition (true).
Length of new array can be smaller than the original.

const numbers = [1, 2, 3, 4];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

3. forEach()

Does not return a new array.
Just loops over elements (used for side effects like printing, updating, etc).
const numbers = [1, 2, 3, 4];
numbers.forEach(num => console.log(num * 2));

// Output:
// 2
// 4
// 6
// 8


👉 Rule of thumb:

Use map when you want to change values.
Use filter when you want to select some values.
Use forEach when you just want to do something with values (no return).
*/

/*
Filter out only adults (age >= 18).
Map their names in uppercase.
forEach to just print them one by one.

👨‍💻 Example Code:
const users = [
  { name: "Anjali", age: 20 },
  { name: "Ravi", age: 15 },
  { name: "Priya", age: 25 },
  { name: "Arjun", age: 17 }
];

// Step 1: filter -> only adults
const adults = users.filter(user => user.age >= 18);

// Step 2: map -> get their names in uppercase
const adultNames = adults.map(user => user.name.toUpperCase());

// Step 3: forEach -> print each name
adultNames.forEach(name => console.log(name));



🔹 Step-by-step Output:

After filter:
[ { name: "Anjali", age: 20 }, { name: "Priya", age: 25 } ]

After map:
["ANJALI", "PRIYA"]

forEach prints:
ANJALI
PRIYA


👉 So here:

filter = select adults
map = transform names
forEach = display results
*/