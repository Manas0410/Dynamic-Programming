const howSum = (target, nums) => {
  const table = new Array(target + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= target; i++) {
    if (table[i] !== null) {
      for (let num of nums) {
        table[i + num] = [...table[i], num];
        if (table[target] !== null) return table[target];
      }
    }
  }
  return null;
};

console.log(howSum(7, [2, 3, 4]));
console.log(howSum(7, [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]));
