function maxTurbulenceSize(arr: number[]): number {
  if (arr.length <= 1) return arr.length
  if (arr.length === 2) {
    if (arr[0] === arr[1]) return 1
    else return 2
  }

  let dp = [1]
  let maxLength = 1

  if (arr[0] === arr[1]) dp[1] = 1
  else dp[1] = 2
  for (let i = 2; i < arr.length; i++) {
    if (
      (arr[i - 2] < arr[i - 1] && arr[i - 1] > arr[i]) ||
      (arr[i - 2] > arr[i - 1] && arr[i - 1] < arr[i])
    ) {
      dp[i] = dp[i - 1] + 1
    } else if (arr[i] === arr[i - 1]) {
      dp[i] = 1  // 当当前值与前一个值相同时候，值为1
    } else {
      dp[i] = 2 // 初始值为2是因为，arr[i]与arr[i-1]必定符合条件
    }

    maxLength = Math.max(maxLength, dp[i])
  }

  return maxLength
};