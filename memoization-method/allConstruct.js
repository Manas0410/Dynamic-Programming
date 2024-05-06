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
  if (target === "") return true;
  let count = 0;
  const allMAtches = [];

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
  return allMAtches;
};
