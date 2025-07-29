module.exports = function reverse(n) {
  const num = Math.abs(n);
  const hundreds = Math.floor(num / 100);
  const tens = Math.floor((num % 100) / 10);
  const units = num % 10;
  let res = '';
  if (hundreds) {
    res += `${units}${tens}${hundreds}`;
  } else if (!hundreds) {
    res += `${units}${tens}`;
  }
  return Number(res);
};
