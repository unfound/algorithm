function rob(nums: number[]): number {
  const length = nums.length

  if (length === 1) {
    return nums[0]
  } else if (length === 2) {
    return Math.max(nums[0], nums[1])
  }

  let dp = [nums[0], Math.max(nums[0], nums[1])]
  for (let i = 2; i < length - 1; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1])
  }
  let max = dp[length - 2]
  dp = [0, nums[1]]
  for (let i = 2; i < length; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1])
  }

  return Math.max(max, dp[length - 1])
};
