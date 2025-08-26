
function factorial(num) {
  if (num < 0) return -1;
  return num === 0 ? 1 : num * factorial(num - 1);
}

module.exports = factorial;
