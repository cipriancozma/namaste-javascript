var x = 7;
// getName(); // behaves as a function
// getName2(); // behaves as a variable when using arrow function

function getName() {
  console.log("Namaste JavaScript");
}

// console.log(x);

// console.log(getName);

// var getName2 = () => {
//   console.log("Namaste from getName");
// };

// See below example 2

console.log(sum(2, 3)); // 5 is allocated as a result to the function
console.log(city); // undefined
console.log(myName); // Reference error: cannot acces 'myName' before initialization

function sum(x, y) {
  return x + y;
}

const myName = "Ciprian";

let info = {
  age: 34,
  nationality: "Romanian",
};

var city = "Iasi";
