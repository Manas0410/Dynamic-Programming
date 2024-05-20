/**
 * 1 visualize the problem as table [array]
 * 2 size the table based on inputs
 * 3 seed ur table (optional)
 * 4 main give some default values to table
 * 5 iterate through table
 * 6 fill further positions based on current position
 *
 */

const gridTravelerTab = (m, n) => {
  // const table = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  const table = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0));

  table[1][1] = 1;

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const current = table[i][j];
      if (j + 1 <= n) table[i][j + 1] += current; // move right
      if (i + 1 <= m) table[i + 1][j] += current; // move down
    }
  }

  return table[m][n];
};

console.log(gridTravelerTab(3, 3)); // Output: 6

new Array(5);
