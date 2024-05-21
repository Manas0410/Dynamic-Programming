const canConstruct = (target, words) => {
  let table = new Array(target.length + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= target.length; i++) {
    if (table[i]) {
      for (let word of words) {
        if (target.slice(i, i + word.length) === word) {
          table[i + word.length] = true;
        }
        if (table[target.length]) return true;
      }
    }
  }
  return table[target.length];
};

console.log(canConstruct("abcdef", ["ab", "cd", "abc", "ef"]));
