// recursion
const gridTraveller = (m, n) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  return gridTraveller(m - 1, n) + gridTraveller(m, n - 1);
};

// memoization
const memoizeGridTraveller = (m, n, memo = {}) => {
  let key = m < n ? m + "," + n : n + "," + m;

  if (key in memo) return memo[key];
  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;

  memo[key] =
    memoizeGridTraveller(m, n - 1, memo) + memoizeGridTraveller(m - 1, n, memo);

  return memo[key];
};

// console.log(gridTraveller(3,4))
// console.log(gridTraveller(2,3))

console.log(memoizeGridTraveller(3, 4));
console.log(memoizeGridTraveller(2, 3));
console.log(memoizeGridTraveller(20, 30));
