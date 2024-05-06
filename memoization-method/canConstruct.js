/**
 * create fxn canConstruct(target,wordBank)
 * target = target string
 * wordbank = array of strs
 * function should return boolean whether or not we can create target string by concatenating strs of wordbank
 *
 * canConstruct("abcdef",["ab" , "cd" , "abc" , "ef"]) => true
 */

/**
 * 1 tree
 * 2 find base cond from tree
 * 3 by recursion
 * 4 add memo object
 * 5 return result by using memo
 */

/**             abcdef
 * -ab       -cd             -abc         -ef
 * cdef     no prefix       def         no prefix
 *
 * now take cdef
 *                  cdef
 * -ab       -cd             -abc         -ef
 * NP         ef             NP             NP
 *
 * now take ef
 *                  ef
 * -ab       -cd             -abc         -ef
 *  NP        NP                NP         ""
 *
 * base case if we get "" => true
 * if no prefix => false
 *  */

// by recursioin
//
// time complexity
// m length of target
// n length of array
// time O(n^m * m {cz of slice })  [ branching factor to the power height   ]
// space O(m * m)
//

const canConstruct = (target, words) => {
  if (target === "") return true;

  for (let word of words) {
    if (target.indexOf(word) === 0) {
      if (canConstruct(target.slice(word.length), words)) {
        return true;
      }
    }
  }
  return false;
};

// console.log(canConstruct("abcdef", ["ab", "cd", "abc", "ef"]));
// console.log(
//   canConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab", [
//     "a",
//     "aa",
//     "aaaa",
//     "aaaaaa",
//   ])
// );

//
// memoization
// time O(n*m^2)
// space O(m^2)
//

const canConstructMemoized = (target, words, memo = {}) => {
  if (target === "") return true;
  if (target in memo) return memo[target];

  for (let word of words) {
    if (target.indexOf(word) === 0) {
      memo[target] = canConstructMemoized(
        target.slice(word.length),
        words,
        memo
      );
      if (memo[target]) {
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
};

console.log(canConstructMemoized("abcdef", ["ab", "cd", "abc", "ef"]));
console.log(
  canConstructMemoized(
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
    ["a", "aa", "aaaa", "aaaaaa"]
  )
);
