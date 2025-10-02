/*Qs1. Square and sum the array elements using the arrow function and then find the
       average of the array.*/  

       let nums = [1,2,3,4,5];
       let square = nums.map((el) => el*el);
     
        // console.log(square);
    
       let sum = square.reduce((acc, res) => acc + res, 0);
       let avg = sum/nums.length;
    //    console.log(avg);
       

/*Qs2. Create a new array using the map function whose each element is equal to the
original element plus 5.*/
// console.log(nums.map((el) => el+5));


/*Qs3. Create a new array whose elements are in uppercase of words present in the
original array.*/

let strings = ["anjali", "pihu", "annu", "pushpa"];

// console.log(strings.map((el) => el.toUpperCase()));

/* Qs5. Write a function called mergeObjects that accepts two objects and returns a new
object which contains all the keys and values of the first object and second object. */

const mergeObjects = (obje1, obje2) =>({...obje1, ...obje2});
mergeObjects({a:1, b:2}, {c:3, d:4});