class ArrayUtils {
  constructor() {
    throw new Error("ArrayUtils cannot be instantiated.");
  }
  static average(arr) {
    if (arr.length === 0) throw new Error("Array cannot be empty.");
    return arr.reduce((acc, number) => acc + number, 0) / arr.length;
  }

  static max(arr) {
    return Math.max(...arr);
  }
}

// const test_1 = new ArrayUtils([2, 4, 1, 5]);
