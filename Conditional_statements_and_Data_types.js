// Perform addition of various types (string + boolean, string + number, number + boolean)
const str = 'hello'
const bool = true
const num = 5
console.log(str + bool)
console.log(str + num)
console.log(num + bool)

// Perform multiplication of various types (string * boolean, string * number, number * boolean)
console.log(str * bool)
console.log(str * num)
console.log(num * bool)

// Divide different types (string / boolean, string / number, number / Boolean)
console.log(str / bool)
console.log(str / num)
console.log(num / bool)

// Perform explicit conversion (number, string, boolean)
console.log(Number(str))
console.log(String(bool))
console.log(Boolean(num))
