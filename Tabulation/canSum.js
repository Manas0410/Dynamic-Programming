/**
 * 1 visualize the problem as table [array]
 * 2 size the table based on inputs
 * 3 seed ur table (optional)
 * 4 main give some default values to table
 * 5 iterate through table
 * 6 fill further positions based on current position
 *
 */

const canSum = (target, nums) => {
  const table = new Array(target + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= target; i++) {
    if (table[i]) {
      for (let num of nums) {
        table[i + num] = true;
        if (table[target]) return true;
      }
    }
  }
  return false;
};

console.log(canSum(7, [2, 3, 4]));
console.log(canSum(7, [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]));
