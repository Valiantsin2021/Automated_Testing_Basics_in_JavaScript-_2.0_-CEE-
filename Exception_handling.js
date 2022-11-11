/*
In a try catch construction, wrap the code: console.log (a), let a = 3. 
And display an error - ‘let must be declared’ before use. 
When running 1/0, the error 'cannot be divided by zero'
*/

try {
  console.log(a)
  let a = 3
} catch (err) {
  console.log('let must be declared before use ' + err)
}
function div(a, b) {
  if (b !== 0) {
    return a / b
  } else {
    throw new Error('cannot be divided by zero')
  }
}

try {
  console.log(div(1, 0))
} catch (error) {
  console.log('You are trying to divide by zero ' + error)
}
