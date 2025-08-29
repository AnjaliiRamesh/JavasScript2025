const name = "Anjali"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


/* when you use new String(), you’re creating a String object, not just a primitive string.
So here:
'Anjali-AR-com' → primitive string.
new String('Anjali-AR-com') → an object wrapper around that string.
This means gameName is not a plain string, but an object that contains the string inside it.
We almost never use new String() because it can create confusion.*/

const gameName = new String('Anjali-AR-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('j'));

const newString = gameName.substring(0, 4)
console.log(newString);


/* 0  1  2  3  4  5  6  7  8  9  10 11 12
 A  n  j  a  l  i  -  A  R  -   c  o  m

Length = 13
start = -8 → length(13) - 8 = 5 → so start = index 5 (i)
end = 4 → index 4 (l)
Step 3: Compare start and end
Since start (5) is greater than end (4), slice returns "" (empty string).*/

const anotherString = gameName.slice(-3, 4)
console.log(anotherString);

const newStringOne = "   Anjali    "
console.log(newStringOne);
console.log(newStringOne.trim()); //trim reduces unwanted space around it

const url = "https://anjali.com/anjali%20Rameshhh"

console.log(url.replace('%20', '-'))//can replace 

console.log(url.includes('sundar'))//shows if the url contains the particular word

console.log(gameName.split('-'));