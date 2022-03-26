function countVowelStringsOld(n: number): number {
  function f (i: number, n: number): number {
    if (i === 1) return 1
    if (n === 1) return 1
    return f (i - 1, n) + f (i, n - 1)
  }
  return f(1, n) + f(2, n) + f(3, n)+ f(4, n)+ f(5, n)
};

function countVowelStrings(n: number): number {
  const dp: number[] = new Array(5).fill(1)

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < 5; j++) {
      dp[j] = dp[j - 1] + dp[j]
    }
  }
  return dp.reduce((prev, cur) => prev + cur, 0)
};

console.log(countVowelStrings(1))
console.log(countVowelStrings(2))
console.log(countVowelStrings(3))
console.log(countVowelStrings(33))