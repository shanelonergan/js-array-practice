// Import stylesheets
import './style.css';

let fruits = ['apple', 'banana', 'apple', 'banana', 'pear', 'grapes']

// clone an array version 1
let uniqueFruits = Array.from(new Set(fruits))
console.log(uniqueFruits)

// clone an array version 2
let uniqueFruits2 = [...new Set(fruits)]

// replace specific items in an array
fruits.splice(0, 2, "potato", 'tomato')

console.log(fruits)
