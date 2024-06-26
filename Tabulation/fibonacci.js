const gridTravelerTab = (m, n) => {};

const fibTab = (n) => {
  const table = new Array(n).fill(0);
  table[1] = 1;
  for (let i = 0; i < n; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }
  return table[n - 1];
};

console.log(fibTab(10));
