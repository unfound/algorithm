function largestDivisibleSubset(nums: number[]): number[] {
  let dp = new Array(nums.length).fill(1)
  let maxValue = 0
  let maxPathLength = 1
  nums = nums.sort((a, b) => a - b)

  for (let i = 1; i < nums.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] % nums[j] === 0) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    if (dp[i] > maxPathLength) {
      maxPathLength = dp[i]
      maxValue = nums[i]
    }
  }

  let res = []
  for (let i = nums.length - 1; i >= 0; i--) {
    if (dp[i] === maxPathLength && maxValue % nums[i] === 0) {
      res.push(nums[i])
      maxPathLength--
      maxValue = nums[i]
    }
  }

  return res.reverse()
};