function countsheep(number) {
  if (number === 0) {
    console.log("All sheep jumped over the fence")
    return "";
  }
  console.log("Another sheep jumped over the fence");
  countsheep(number - 1)
}

countsheep(3);

function powerCalculator(int, exp) {
  if (exp < 0) {
    return "exponent should be >= 0";
  }
  if (exp == 0) {
    return 1;
  }
  return int * powerCalculator(int, exp - 1)
}

console.log(powerCalculator(10, 2))

const revStr = function (str) {
  if (str === "") {
    return "";
  }
  const newChar = str.pop();
  return newChar + revStr;
}

console.log(revStr('srednop'));
