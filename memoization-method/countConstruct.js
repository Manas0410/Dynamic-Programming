/**
 * create fxn canConstruct(target,wordBank)
 * target = target string
 * wordbank = array of strs
 * function should return number of possible ways we can create target string by concatenating strs of wordbank
 *
 * canConstruct("abcdef",["ab" , "cd" , "abc" , "ef"]) => true
 */

// by recursion

const countConstruct = (target, wordBank) => {
  if (target === "") return true;
  let count = 0;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      let isConstructPossible = countConstruct(
        target.slice(word.length),
        wordBank
      );
      if (isConstructPossible) {
        count += 1;
      }
    }
  }
  return count;
};

console.log(countConstruct("abcdef", ["ab", "cd", "abc", "ef", "def"]));
// console.log(
//   countConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab", [
//     "a",
//     "aa",
//     "aaaa",
//     "aaaaaa",
//   ])
// );

// by memoization

const cmemoizeCountConstruct = (target, wordBank, memo = {}) => {
  if (target === "") return true;
  if (target in memo) return memo[target];
  let count = 0;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      memo[target] = cmemoizeCountConstruct(
        target.slice(word.length),
        wordBank,
        memo
      );
      if (memo[target]) {
        count += 1;
      }
    }
  }
  return count;
};

console.log(cmemoizeCountConstruct("abcdef", ["ab", "cd", "abc", "ef", "def"]));
console.log(
  cmemoizeCountConstruct(
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
    ["a", "aa", "aaaa", "aaaaaa"]
  )
);
