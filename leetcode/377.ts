function combinationSum4(nums: number[], target: number): number {
  let count = 0
  function countSum (nums, target) {
    for (let i = 0; i < nums.length; i++) {
      let delta = target - nums[i]
      if (delta > 0) {
        countSum(nums, delta)
      } else if (delta === 0) {
        count++
      }
    }
  }
  countSum(nums, target)
  return count
};

function combinationSum42(nums: number[], target: number): number {
  let dp = new Array(target + 1).fill(0)
  dp[0] = 1

  for (let i = 1; i <= target; i++) {
    for (let num of nums) {
      if (num <= i) {
        dp[i] += dp[i - num]
      }
    }
  }

  return dp[target]
};

