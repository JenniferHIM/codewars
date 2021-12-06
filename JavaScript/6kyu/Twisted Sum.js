// Find the sum of the digits of all the numbers from 1 to N (both ends included).

// Examples
// # N = 4
// 1 + 2 + 3 + 4 = 10

// # N = 10
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46

// # N = 12
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51

function twistedSum(n) {
  let sum = 0;
  for (let number = 0; number <= n; number++) {
    let numberStr = number.toString();
    if(numberStr === 1) {
      sum += numberStr
    } else {
      numberStr.split('').forEach(digit => sum += +digit)
    }
  }
  return sum;
}