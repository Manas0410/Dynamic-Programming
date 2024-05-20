const bestSum = (target, nums) => {
  const table = new Array(target + 1).fill(null);

  table[0] = [];

  for (let i = 0; i <= target; i++) {
    if (table[i] !== null) {
      for (let num of nums) {
        if (!table[i + num] || table[i + num].length > table[i].length + 1) {
          table[i + num] = [...table[i], num];
        }
      }
    }
  }
  return table[target];
};

console.log(bestSum(7, [3, 3, 3, 3, 4, 3, 3, 3, 3, 4]));
console.log(bestSum(7, [3, 3, 3, 3, 4, 3, 7, 3, 3, 3, 4]));
