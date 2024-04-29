const canSumAry = (numbers, targetsum) => {
  if (targetsum === 0) return [];
  if (targetsum < 0) return null;

  for (let num of numbers) {
    let remainder = targetsum - num;
    let remainderRes = canSumAry(numbers, remainder);
    if (remainderRes !== null) {
      //store
      return [...remainderRes, num];
    }
  }

  return null;
};
console.log(canSumAry([3, 4, 7], 7));
//
