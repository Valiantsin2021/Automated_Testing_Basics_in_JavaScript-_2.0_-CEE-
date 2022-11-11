/* Create 2 objects: animal and cat, add move property to animal object, 
  cat object must inherit move property from object animal */

const animal = {
  move: 'I am moving'
}
const cat = Object.assign(animal)
console.log(cat.move)
