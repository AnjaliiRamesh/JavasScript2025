


function scope cannot be accessed outside the function where as global function can be accessed anywhere
let sum = 87;//global variable
function calSum (a,b){
    let sum = a+b;//local variable
    return sum;
}
console.log(sum)//87 coz function scope bahar nhi aa sakta
calSum(3,4)//7


lexical scope says variable outside the outerfun can be accessed inside the inner function but vice vers is not true;

jo functions objects ke andar defined hote h unhe methods kehte h
