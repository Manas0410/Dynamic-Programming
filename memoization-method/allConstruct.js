/**
 * create fxn canConstruct(target,wordBank)
 * target = target string
 * wordbank = array of strs
 * function should return 2D array of all the possible ways we can create target string by concatenating strs of wordbank
 *
 * canConstruct("abcdef",["ab" , "cd" , "abc" , "ef"]) => true
 */

// by recursion

const allConstruct = (target, wordBank) => {
  if (target === "") return [[]];

  let allMAtches = [];

  for (let word of wordBank) {
    let suffix = target.slice(word.length);

    if (target.indexOf(word) === 0) {
      let isConstructPossible = allConstruct(suffix, wordBank);
      let targetWays = isConstructPossible.map((match) => [word, ...match]);
      allMAtches.push(...targetWays);
    }
  }
  return allMAtches;
};

console.log(allConstruct("abcdef", ["ab", "cd", "abc", "ef", "def"]));

// memeoization

const memoizedAllConstruct = (target, wordBank) => {
  if (target === "") return [[]];
  if (target in memo) return memo[target];

  let allMAtches = [];

  for (let word of wordBank) {
    let suffix = target.slice(word.length);

    if (target.indexOf(word) === 0) {
      let isConstructPossible = memoizedAllConstruct(suffix, wordBank, memo);
      let targetWays = isConstructPossible.map((match) => [word, ...match]);
      allMAtches.push(...targetWays);
    }
  }
  return allMAtches;
};
