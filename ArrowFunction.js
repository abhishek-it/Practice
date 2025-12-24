// const multiply = (a, b) => a * b;

// console.log(multiply(4, 2)); // 8

const square = x => x * x;

console.log(square(5)); // 25

const numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8]



const ages = [12, 18, 25, 14];

const adults = ages.filter(age => age >= 18);

console.log(adults); // [18, 25]


const fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(fruit => {
  console.log(fruit);
});
