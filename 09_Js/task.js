// const favMovie = "Asur"
// let guess = prompt("enter movie: ");

// while(guess != favMovie){
//   if(guess == "quit"){
//     console.log("you quit");
//     break;
//   }
//   guess=  prompt("wrong movie. Try Again!");
   
// }
// if(guess == favMovie){
//     console.log("congrats");
    
// }

let i =1;
while(i<=5){
  if(i == 3){
    break;
  }
  // console.log(i);
  i++;
  
}
// console.log(`break at ${i}`);


//Loops with Array
let fruits = ['mango', 'banana', 'litchi', 'strw', 'apple', 'grapes']
fruits.push("cust")
// for(let i=0; i<fruits.length; i++){
//   // console.log(i, fruits[i]); 
// }
for(let i=fruits.length; i>=0; i--){
  // console.log(i, fruits[i]); 
}

let heroes = [
  ['ironman' ,'thor', 'spiderman'],
  ['superman', 'wonderwomen' ,'flash']
]

for(let i=0; i<heroes.length; i++){
  // console.log(i, heroes[i]);
  for(let j=0; j<heroes[i].length; j++){
  // console.log(`${[j]}, ${heroes[i][j]}`);
}
}

let student = [['anjali' ,100], ['pihu', 80.4], ['abhi', 90]]
for(let i=0; i<student.length; i++){
  // console.log(`info of student ${i+1}`);
  for(let j=0; j<student[i].length; j++){
    // console.log(student[i][j]);
    
  }
}

let fal_fil = ['mango', 'banana', 'litchi', 'strw', 'apple', 'grapes']

for(fal of fal_fil){
  // console.log(fal); 
}

for(char of "anjali"){
  // console.log(char);
  
}

// Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
// Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
// Result should be arr = [1, 3, 4, 5, 6, 3]

let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
for(let i =0; i<arr.length; i++){
   if(arr[i]==2){
    continue;
   }
  //  console.log(i);
   
}
for(let i =0; i<arr.length; i++){
   if(arr[i]==num){
    arr.splice(i, 1);
   }   
}
// console.log(arr);

// Qs2. Write a JS program to find the no of digits in a number.
// Example : if number = 287152, count = 6

let numb = 26534;
count =0;
while(numb>0){
    count++;
    numb = numb%10;
}
// console.log(count);


// Qs3. Write a JS program to find the sum of digits in a number.
// Example : if number = 287152, sum = 25

let number = 287152;
let sum =0;
for(let i=0; i<number.length; i++){
  sum += i;  
}
// console.log(sum);
/*
Qs4. Print the factorial of a number n.
[Factorial of a number n is the product of all positive integers less than or equal to a
given positive integer and denoted by that integer. ]
Example :

7! (factorial of 7) = 1x2x3x4x5x6x7 = 5040
5! (factorial of 5) = 1x2x3x4x5 = 120
3! (factorial of 3) = 1x2x3 = 6
0! Is always 1
*/

let fact = 1;
let n =5;
for(let i=1; i<=num; i++){
  fact = fact*i;
}
console.log(fact);

// Qs5. Find the largest number in an array with only positive numbers.
 
let arr1 = [1, 2, 3, 4, 5, 6, 2, 3];
let largest = 0;
for(let i=0; i<arr1.length; i++){
   if(arr1[i] > largest){
    largest = arr1[i];
   }
}
console.log(largest);

