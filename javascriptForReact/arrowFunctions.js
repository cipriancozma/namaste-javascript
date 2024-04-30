function getYear(str) {
  return str.split("-")[0];
}
console.log(getYear("1990-12-25"));

const getYearArrow = (str) => str.split("-")[0];
console.log(getYearArrow("1990-12-25"));
