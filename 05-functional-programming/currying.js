function multiply(a) {
  return function(b) {
    return a * b;
  };
}

const multiplyBy2 = multiply(2);
const multiplyBy3 = multiply(3);

module.exports = { multiply, multiplyBy2, multiplyBy3 };
