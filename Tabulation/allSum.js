const bestSum = (target, nums) => {
  const table = new Array(target + 1).fill([]);

  table[0] = [[]];
  for (let i = 0; i <= target; i++) {
    if (table[i]) {
      for (let num of nums) {
        if (Array.isArray(table[i + num]))
          table[i + num] = [
            ...table[i + num],
            ...table[i].map((item) => [...item, num]),
          ];
      }
    }
  }
  return table[target];
};

console.log(bestSum(7, [3, 4, 1, 3, 4]));
// console.log(bestSum(7, [3, 3, 3, 3, 4, 3, 7, 3, 3, 3, 4, 5, 2]));
