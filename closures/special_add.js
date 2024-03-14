function specialAdd(num) {
  let sum = num;
  if (!num) return 0;
  function innerAdd(num_2) {
    if (num_2) {
      sum += num_2;
      return innerAdd;
    } else {
      return sum;
    }
  }
  return innerAdd;
}
