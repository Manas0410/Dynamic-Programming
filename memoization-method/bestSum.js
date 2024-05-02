// by recursion
// time => O(n^m *m) NTC
// space => O(m) NTC
//  n is length of array , m is number

const bestSum = (nums, targetSum) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestSum = null;

  for (let num of nums) {
    let remainder = targetSum - num;

    let targetRes = bestSum(nums, remainder);

    if (targetRes !== null) {
      const combination = [...targetRes, num];
      if (shortestSum === null || shortestSum.length > combination.length) {
        shortestSum = [...combination];
      }
    }
  }
  return shortestSum;
};

// console.log(bestSum([3, 4, 7], 7));
// console.log(bestSum([5, 3, 4, 7], 7));
// console.log(bestSum([14, 7, 5], 100));

//
// by memoization
// yet to implement

const bestSumMemoized = (nums, targetSum, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestSum = null;

  for (let num of nums) {
    let remainder = targetSum - num;

    let targetRes = bestSumMemoized(nums, remainder, memo);
    memo[remainder] = targetRes;

    if (targetRes !== null) {
      const combination = [...targetRes, num];
      if (shortestSum === null || shortestSum.length > combination.length) {
        shortestSum = combination;
      }
    }
  }

  return shortestSum;
};

console.log(bestSumMemoized([3, 4, 7], 7));
console.log(bestSumMemoized([5, 3, 4, 7], 7));
console.log(bestSumMemoized([14, 7, 5], 300));
