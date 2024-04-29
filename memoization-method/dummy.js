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

console.log(cansum([2], 10000));

// create tree with one root node ✅
// implement with recursion ✅
// add memo object ✅
// crete key for storing val in memo✅
// add basecase of memoo✅
// return in memo
