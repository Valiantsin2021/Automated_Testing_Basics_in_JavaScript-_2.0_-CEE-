// Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console

const movies = ['rembo', 'terminator', 'robocop']
movies.forEach(el => console.log(el))

// Given an array of car manufacturers, convert the array to a string and back to an array

let carManufacturers = ['ford', 'bmw', 'opel']
const string = carManufacturers.join(', ')
console.log(string)
carManufacturers = string.split(',')
console.log(carManufacturers)

// Given an array of the names of your friends, add the words hello to each element of the array

const names = ['oleg', 'pedro', 'pablo']
names.forEach(el => console.log(`hello ${el}`))

// Convert numeric array to Boolean

const numeric = [1, 2, 0, 4]
const boolNumeric = numeric.map(el => Boolean(el))
console.log(boolNumeric)

// Sort the array [1,6,7,8,3,4,5,6] in descending order

const arr = [1, 6, 7, 8, 3, 4, 5, 6]
arr.sort((a, b) => b - a)
console.log(arr)

// Filter array [1,6,7,8,3,4,5,6] by value> 3

const arr1 = [1, 6, 7, 8, 3, 4, 5, 6]
const filtered = arr1.filter(el => el > 3)
console.log(filtered)

// Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number

const arr2 = [1, 6, 7, 8, 3, 4, 5, 6]

function equal(array, num) {
  return array.findIndex(el => el === num)
}
console.log(equal(arr2, 5))

// Implement a loop that will print the number 'a' until it is less than 10

let a = 0
while (a < 10) {
  console.log(a)
  a++
}

// Implement a loop that prints prime numbers to the console

const lowerNum = 1
const higherNum = 20

console.log(`The prime numbers between ${lowerNum} and ${higherNum} are:`)

for (let i = lowerNum; i <= higherNum; i++) {
  let flag = 0
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      flag = 1
      break
    }
  }
  if (i > 1 && flag === 0) {
    console.log(i)
  }
}

// Implement a loop that prints odd numbers to the console

const start = 10

const end = 20

for (let i = start; i <= end; i++) {
  if (i % 2 !== 0) {
    console.log(i)
  }
}
