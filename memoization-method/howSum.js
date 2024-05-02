// by recursion
// time => O(n^m *m)
// space => O(m) NTC
//  n is length of array , m is number

const howSum = (nums, targetSum) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of nums) {
    let remainder = targetSum - num;
    let targetRes = howSum(nums, remainder);
    if (targetRes !== null) {
      return [...targetRes, num];
    }
  }
  return null;
};

// console.log(howSum([3, 4, 7], 7));
// console.log(howSum([5, 3, 4, 7], 7));
// console.log(howSum([14, 7, 5], 300));

// by memoization

const memoHowSum = (nums, targetSum, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum < 0) return null;
  if (targetSum === 0) return [];

  for (let num of nums) {
    let remainder = targetSum - num;

    let targetRes = memoHowSum(nums, remainder, memo);
    if (targetRes !== null) {
      memo[remainder] = [...targetRes, num];
      return memo[remainder];
    }
  }
  return null;
};

console.log(memoHowSum([3, 4, 7], 7));
console.log(memoHowSum([5, 3, 4, 7], 7));
console.log(memoHowSum([14, 7, 5], 300));
