/*Create 2 objects: animal and cat, add move property to animal object, 
  cat object must inherit move property from object animal */

const animal = {
  move: 'I am moving'
}
const cat = {
  meow: 'Meow'
}
cat.__proto__ = animal
console.log(cat.move)
