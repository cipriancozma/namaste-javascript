// The ability of inner functions to remember variables defined in outer functions
// Useful for encapsulating logic and data hiding

function idGenerator() {
  let start = 0;

  return function generate() {
    start += 1;
    return start;
  };
}

const id = idGenerator();

// Useful for creating private variables
function createCounter() {
  let count = 0;

  return {
    increment: function () {
      return count++;
    },
    decrement: function () {
      return count--;
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();

// Factory Functions
function exponentialFunction(exp) {
  return function (val) {
    return val ** exp;
  };
}

const square = exponentialFunction(2);
const cube = exponentialFunction(3);
