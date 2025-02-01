//reverse the number and do not print of number contain 0 if present in first position or last position.

const reverse = (x) => {
  let temp = 0;
  let reverse = x;
  while (reverse > 0) {
    let rem = reverse % 10;
    reverse = Math.floor(reverse / 10);
    temp = temp * 10 + rem;
  }
  console.log(temp);
  return temp;
};

reverse(-1234);
