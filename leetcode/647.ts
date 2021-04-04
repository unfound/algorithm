function countSubstrings(s: string): number {
  if (s.length <= 1) return s.length
  let count = 0
  let length = s.length
  let dp = []
  
  for (let j = 0; j < length; j++) {
    dp[j] = []
    for (let i = 0; i <= j; i++) {
      if (i === j) {
        dp[j][i] = true
      } else if (i + 1 === j) {
        dp[j][i] = s[i] === s[j]
      } else {
        dp[j][i] = s[i] === s[j] && dp[j - 1][i + 1]
      }

      if (dp[j][i]) count++
    }
  }

  console.log(dp)
  return count
};