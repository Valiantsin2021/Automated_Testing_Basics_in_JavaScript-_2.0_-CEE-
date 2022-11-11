/*
Given the string 'ahb acb aeb aeeb adcb axeb'. 
Write a regular expression that matches the strings ahb, acb, aeb by pattern: 
letter 'a', any character, letter 'b'
*/

const str = 'ahb acb aeb aeeb adcb axeb'
console.log(str.match(/a.b/g))

// Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest

const string1 = '2 + 3 223 2223'
const substr = string1.match(/\d \+ \d/)
console.log(substr)

// Get the day, month and year of the current date and output it to the console separately

const date = Date()
console.log(date.match(/\b\d\d\b/))
console.log(date.match(/\b \w{3}\b/))
console.log(date.match(/\d{4}/))
