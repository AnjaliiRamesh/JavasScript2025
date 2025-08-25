/*********** Array ************/

/* 
JavaScript array-copy operations create shallow copies:

 * A shallow copy of an object is a copy whose properties share the same references to the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too.
 * A deep copy of an object is a copy whose properties do not share the same references to the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too. 
*/
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

/************ Array methods  **************/

// myArr.push(6)
//console.log(myArr);
// myArr.push(7)
// myArr.pop()
// console.log(myArr);


// myArr.unshift(9) //inserts at front
// myArr.shift() //removes first element
// console.log(myArr);


// console.log(myArr.includes(9));//checks for existence
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() //join binds the array together and converts them to string

// console.log(myArr);
// console.log( newArr);


// slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(0, 3)

// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);

// const months = ["Jan", "March", "April", "June"];
// months.splice(1, 0, "Feb");
// Inserts at index 1
// The 0 basically means "don’t delete anything, just insert"
// console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]


// months.splice(1, 1, "Feb");
//It would delete 1 element at index 1 ("March") and replace it with "Feb", giving:
//["Jan", "Feb", "April", "June"]



/************ Slice & Splice ************/

// slice → copy
// splice → change

/*
slice()

Does not change the original array → returns a copy.
Takes out a portion of the array (start, end).
end is not included.
Works like scissors ✂️ → cuts a piece but doesn’t damage the original.
*/

const arr = ["Jan", "Feb", "Mar", "Apr"];
const sliced = arr.slice(1, 3);

// console.log(sliced);  // ["Feb", "Mar"]
// console.log(arr);     // ["Jan", "Feb", "Mar", "Apr"]  (unchanged)

/*
splice()

Changes the original array → adds, removes, or replaces elements.
Syntax: splice(start, deleteCount, items...)
Works like surgery 🪡 → directly operates on the original array.
*/

// const arr = ["Jan", "Feb", "Mar", "Apr"];
// arr.splice(1, 2, "X", "Y");

// console.log(arr);  // ["Jan", "X", "Y", "Apr"]

//Here, starting at index 1, it deleted 2 elements ("Feb", "Mar") and inserted "X", "Y".



/************ Array Day-2  **************/

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) //array ke andar arr de dega ...works on existing array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) ///creates new array ...ek hi value de sakte ho
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] //spread operator ..multipke value leta h

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth
// console.log(real_another_array);



// console.log(Array.isArray("Anjali"))
// console.log(Array.from("Anjalii"))
// console.log(Array.from({name: "anjali"})) // cannot directly convert hence return empty

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));