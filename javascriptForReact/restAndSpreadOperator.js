const arr1 = [1, 4, 5, 2, 5, 6];
const arr2 = [10, 12, 14, 16];

// spread operator
const combinedArr = [...arr1, ...arr2];

// rest operator

function abc(param1, ...otherParams) {
  return otherParams;
}

console.log(abc(1, 10, 20, 30, 50));
