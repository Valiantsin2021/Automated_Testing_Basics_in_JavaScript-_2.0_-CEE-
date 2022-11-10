/*
Create a car object, add a color property to it with the value equals 'black'
Change the color property of the car object to 'green'
Add the power property to the car object, which is a function and displays the engine power to the console
*/

const car = {
  color: "black",
  power() {
    console.log("car's power is 100hp");
  },
};

car.color = "green";
car.power();

// Pears and apples are accepted to the warehouse, write a function that returns the result
// of adding the number of accepted pears and apples

function sumFruits(pears, apples) {
  return pears + apples;
}

// Your name is saved in the payment terminal, write a function to define the name in the terminal
//(if you entered your name, then hello + name, if not, then there is no such name)

let greet = function sayHi(name) {
  if (name) {
    return `Hello ${name}`;
  }
  return "There is no such name";
};

console.log(greet("Bob"));
console.log(greet());

//Write a function for calculating the type of argument and type output to the console

function getType(arg) {
  console.log(typeof arg);
}
getType(5);
getType(true);
getType("str");

//Write a function that determines whether a number is prime or not

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) return console.log(false)
  }
  return console.log(true)
}
isPrime(5)
isPrime(6)