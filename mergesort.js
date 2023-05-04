let array = [5, 1 , 4, 2, 8];

let middle = Math.floor(array.length / 2);
let left = array.slice(0, middle);
let right = array.slice(middle)



console.log(left, right)
console.log(middle);