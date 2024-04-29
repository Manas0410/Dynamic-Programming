// canSum

// recursion
// time => O(n^m)
// space => O(m)
//  n is length of array , m is number

const canSum = (numbers, targetsum) => {
  if (targetsum === 0) return true;
  if (targetsum < 0) return false;

  for (let num of numbers) {
    if (canSum(numbers, targetsum - num) === true) return true;
  }

  return false;
};

// console.log(canSum([3, 4, 7], 7));
// console.log(canSum([5, 3, 4, 7], 7));
// console.log(canSum([14, 7], 300));

// memoization
// time => O(n^m)
// space => O(m)

const meoizeCanSum = (numbers, targetsum, memo = {}) => {
  if (targetsum in memo) return memo[targetsum];
  if (targetsum === 0) return true;
  if (targetsum < 0) return false;

  for (let num of numbers) {
    memo[targetsum] = meoizeCanSum(numbers, targetsum - num, memo);
  }

  return memo[targetsum];
};

// console.log(meoizeCanSum([3, 4, 7], 7));
// console.log(meoizeCanSum([5, 3, 4, 7], 7));
// console.log(meoizeCanSum([14, 7], 300));

//
// V2 more optimized cause returns true if found any possible sum
//
// time => O(n* m)
// space => O(m)

const meoizeCanSumV2 = (numbers, targetsum, memo = {}) => {
  if (targetsum in memo) return memo[targetsum];
  if (targetsum === 0) return true;
  if (targetsum < 0) return false;

  for (let num of numbers) {
    const remainder = targetsum - num;
    if (meoizeCanSumV2(numbers, remainder, memo) === true) {
      memo[targetsum] = true;
      return true;
    }
  }

  memo[targetsum] = false;
  return false;
};

console.log(meoizeCanSumV2([3, 4, 7], 7));
console.log(meoizeCanSumV2([5, 3, 4, 7], 7));
// console.log(meoizeCanSumV2([14, 7], 100000));

/////////////////
