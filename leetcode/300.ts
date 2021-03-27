function lengthOfLIS(nums: number[]): number {
  if (nums.length <= 0) return 0

  let maxLength = 1
  let dp = [1]
  for (var i = 1; i < nums.length; i++) {
    let maxI = 1
    for (var j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        maxI = Math.max(dp[j] + 1, maxI)
      }
    }
    dp[i] = maxI
    maxLength = Math.max(dp[i], maxLength)
  }

  return maxLength
};
