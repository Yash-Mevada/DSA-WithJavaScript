// Number is look same when reversed.

function palindrome(x) {
  let temp = 0;
  let reverse = x;
  while (reverse > 0) {
    let rem = reverse % 10;
    reverse = Math.floor(reverse / 10);
    temp = temp * 10 + rem;
  }
  if (temp == x) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

palindrome(121);
