// Destructuring

const obj = {
  player: "bobby",
  experience: 20,
  wizardLevel: false,
};

const { player, wizardLevel } = obj;
// console.log(player); // bobby

// Template strings

const greeting = `Hello, how are you ${player}?`;
// console.log(greeting);

// Default arguments

function greet(name = "", age = 30, pet = "dog") {
  return `Hello ${name}. You are ${age} years old and you own a ${pet}`;
}

// console.log(greet("Ciprian", 34, "cat"));

// Arrow functions

const add = (x, y) => x + y;

// Advanced Arrays

const arr = [1, 2, 10, 16];

const doubled = [];
const newArr = arr.forEach((num) => {
  doubled.push(num * 2);
});
// console.log(doubled);

const mapArray = arr.map((num) => num * 2);
// console.log(mapArray);

const filteredArr = arr.filter((num) => num > 5);
// console.log(filteredArr);

const sum = arr.reduce((acc, num) => acc + num, 0);
// console.log(sum);

// Advanced Objects
// pas by value vs pass by reference

let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

// console.log(object1 === object2); // true
// console.log(object1 === object3); // false
