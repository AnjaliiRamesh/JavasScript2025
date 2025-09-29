// Qs1. Create a program that generates a random number representing a dice roll.
// [The number should be between 1 and 6].

let dice = Math.floor(Math.random() * 6)+1;
// console.log(dice);

// Qs2. Create an object representing a car that stores the following properties for the
// car: name, model, color.
// Print the car’s name.

const car = {
    name : "toyota",
    model : "M24",
    color : "gray"
};
// console.log(car.name);
//'toyota'


// Qs3. Create an object Person with their name, age and city.
// Edit their city’s original value to change it to “New York”.
// Add a new property country and set it to the United States.

const Person = {
    name : "anjali",
    age : 32,
    city : "Mumbai"
}
Person.city = "newYork";
Person.country = "Us";
console.log(Person);


