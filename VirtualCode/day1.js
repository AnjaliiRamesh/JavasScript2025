var person = {
    firstName : "anjali",
    lastName : "Gupta",
    age: 21,
    stock: true
}
/*
console.log(person)

dot notation
console.log(person.age)

bracket notation
console.log(person['firstName'])

*/

var caption = {
    firstName : "anjali",
    lastName : "Gupta",
    age: 21,
    friend: ['mannya', "pushpa", "neha"],

    address:{
        state: "Mumbai",
        city: {
            name: "Vasai",
            pincode: "401202"
        }
        
    }
}

// console.log(caption.friend[1]);

// console.log(caption.address.city.name) ;

caption.fav = ['momos','panipuri','manchurian']

delete caption.firstName
console.log(caption)
