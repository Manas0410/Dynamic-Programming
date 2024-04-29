// fibbonacci series

// by recursion O(2^n)

const fib = (m) => {
  if (m < 3) return 1;
  return fib(m - 1) + fib(m - 2);
};

// console.log(fib(5));
// console.log(fib(6));
// console.log(fib(50));

// memoization O(n)

const memoizeFib = (m, memo = {}) => {
  if (m in memo) return memo[m];
  if (m < 3) return 1;

  memo[m] = memoizeFib(m - 1, memo) + memoizeFib(m - 2, memo);
  return memo[m];
};

console.log(memoizeFib(5));
console.log(memoizeFib(6));
console.log(memoizeFib(50));
