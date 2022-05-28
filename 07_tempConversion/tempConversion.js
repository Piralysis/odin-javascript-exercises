const ftoc = function(n) {
  let value = (n - 32) * (5 / 9);
  return round(value);
};

const ctof = function(n) {
  let value = n * (9 / 5) + 32;
  return round(value);
};

const round = function(value, precision = 1) {
  let multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
