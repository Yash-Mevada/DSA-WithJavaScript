// count total number of divisors of a number

const allDivisorsOfNumber = (number) => {
  //   for (let i = 0; i <= number; i++) {
  //     if (number % i === 0) {
  //       console.log(i);
  //     }
  //   }

  let array = [];
  for (let i = 0; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      array.push(i);
      //   console.log(i);
      if (number / i != i) {
        array.push(number / i);
        // console.log(number / i);
      }
    }
  }
  console.log(array.sort((a, b) => a - b).toString());
  return array.sort((a, b) => a - b).toString();
};

allDivisorsOfNumber(36);
