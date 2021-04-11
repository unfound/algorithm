function nthUglyNumber(n: number): number {
  if (n <= 6) return n

  let dp = []
  dp[1] = 1
  let p2 = 1, p3 = 1, p5 = 1
  for (let i = 2; i <= n; i++) {
    let multiP2 = 2 * dp[p2], multiP3 = 3 * dp[p3], multiP5 = 5 * dp[p5]
    dp[i] = Math.min(Math.min(multiP2, multiP3), multiP5)

    if (dp[i] === multiP2) {
      p2++
    }
    if (dp[i] === multiP3) {
      p3++
    }
    if (dp[i] === multiP5) {
      p5++
    }
  }
  return dp[n]
};