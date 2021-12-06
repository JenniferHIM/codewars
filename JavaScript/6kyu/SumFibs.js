// Create a function that takes an argument n and sums even Fibonacci numbers up to n's index in the Fibonacci sequence.

// Example:

// sumFibs(5) === 2 // (0, 1, 1, 2, 3, 5);2 is the only even number in the sequence and doesn't have another number in the sequence to get added to in the indexed Fibonacci sequence.
// Example:

// sumFibs(9) === 44; // (0, 1, 1, 2, 3, 5, 8, 13, 21, 34)
// // 2 + 8 + 34 = 44;

function sumFibs(n) {
	// you are the golden ratio.
let arrayFib = [];r
  let temp = 0;
  let curr = 1;
  let last = 0;
  
  for (let i = 0; i <= n; i += 1) {
    arrayFib.push(last);
    temp = curr;
    curr = last;
    last = temp + curr;
  }
  
  const evenArr = arrayFib.filter((elm) => elm % 2 === 0);
  
  return evenArr.reduce((x, y) => x + y);
};