function isPrime(num) {
  let count = 0;

  //   timeComplexity = O(n)
  //   for (let i = 1; i <= num; i++) {
  //     if (num % i == 0) {
  //       count++;
  //     }
  //   }
  //   if (count == 2) {
  //     console.log(true);
  //     return true;
  //   } else {
  //     console.log(false);
  //     return false;
  //   }

  // for timecomplexity = O(sqrt(n))
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      count++;
      if (num / i != i) {
        count++;
      }
    }
  }
  if (count == 2) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

isPrime(78);
