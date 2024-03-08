// var variable declarations are pulled to the top of their function

// variable is equal to undefined until definition

console.log(food); // undefined
var food = "pizza";

// in JS all the variables declared with var, let and const are hoisted to the top.
// Variables with var are hoisted with a default initialization which is undefined.

// Variables with let and const also are hoisted but without a default initialization.
// This is the reason why accessing before initialization will throw a reference error.
// It's know as TEMPORAL DEAD ZONE, compilers know its existence but can't access it because it's not initialized.
