const repeatString = function(s, n) {
  let retval = '';
  if (n < 0) {
    return 'ERROR';
  }
  for (let i = 0; i < n; i++) {
    retval += s;
  }
  return retval;
};

// Do not edit below this line
module.exports = repeatString;