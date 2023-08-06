const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (array) {
  let sum = 0;
  for (let numbers of array) {
    sum += numbers;
  }
  return sum;

};

const multiply = function (x) {
  let sum = 1;
  for (let numbers of x) {
    sum *= numbers;
  }
  return sum;

};

const power = function (a, b) {
  let answer = 1;
  if (a == 0) {
    answer = 1;
  } else {
    for (i = 0; i < b; i++) {
      answer *= a;
    }
  }

  return answer;

};

const factorial = function (n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    for (i = n-1; i >= 1; i--) {
      n *= i;
    }
    return n;
  }
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
