// sum of all single digit cubes

function isStrong(num) {
  let sum = 0;
  let temp = num;
  while (temp > 0) {
    let rem = temp % 10;
    sum = sum + rem ** 3;
    temp = Math.floor(temp / 10);
  }
  if (sum == num) {
    console.log(true);
    return true;
  } else {
    console.log(false);

    return false;
  }
}

isStrong(123);
