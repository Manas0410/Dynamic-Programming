const cansum = (numbers, targetsum, memo = {}) => {
  if (targetsum in memo) return memo[targetsum];

  if (targetsum === 0) return true;
  if (targetsum < 0) return false;

  for (let num of numbers) {
    let remainder = targetsum - num;
    if (cansum(numbers, remainder, memo)) {
      memo[remainder] = true;
      return true;
    }
  }
  memo[targetsum] = false;
  return false;
};

// console.log(cansum([2], 10000));

// create tree with one root node ✅
// implement with recursion ✅
// add memo object ✅
// crete key for storing val in memo✅
// add basecase of memoo✅
// return in memo

function targetSumArray(numbers, target) {
  if (target === 0) return [];
  if (target < 0) return null;

  let shortest = null;

  for (let num of numbers) {
    let rem = target - num;
    let remArr = targetSumArray(numbers, rem);
    if (remArr !== null) {
      let combination = [...remArr, num];
      if (shortest === null || combination.length < shortest.length) {
        shortest = [...combination];
      }
    }
  }
  return shortest;
}
console.log(targetSumArray([3, 3, 4, 7], 7));

function targetSumArray(numbers, target, prev = []) {
  if (target === 0) return [];
  if (target < 0) return null;

  for (let num of numbers) {
    let rem = target - num;
    let remArr = targetSumArray(numbers, rem, prev);
    if (remArr) {
      if (
        (prev.length === 0 && target == 0) ||
        (prev.length > [num, ...remArr].length && target == 0)
      ) {
        prev = [num, ...remArr];
      }
      console.log(prev);
      //return [num, ...remArr];
    }
  }

  return prev;
}
