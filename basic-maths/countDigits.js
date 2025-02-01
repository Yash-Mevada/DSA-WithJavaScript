//conut the number of digits

const countDigit = (n) => {
  let count = 0;
  while (n > 0) {
    count = count + 1;
    n = Math.floor(n / 10);
  }
  console.log(count);
  return count;
};

countDigit(555555);
