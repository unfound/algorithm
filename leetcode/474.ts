function findMaxForm(strs: string[], m: number, n: number): number {
  let strLengthMap: Map<string, number[]> = new Map()
  for (let str of strs) {
    strLengthMap.set(str, getStrLength(str))
  }

  return dp(strs, [])

  function dp(str: string[], subs: string[]) {
    let oneNum = 0
    let zeroNum = 0
    for (let str of subs) {
      oneNum += strLengthMap.get(str)[1]
      zeroNum += strLengthMap.get(str)[0]
    }

    if (oneNum > n || zeroNum > m) return -1
    if (str.length <= 0) return 0

    let max = -Infinity
    for (let i = 0; i < strs.length; i++) {
      var str = strs.splice(i, 1)
      subs.push(str[0])

      let subDeep = dp(strs, subs)
      max = Math.max(max, subDeep + 1)

      subs.pop()
      strs.splice(i, 0, str[0])
    }

    return max
  }

  function getStrLength(str: string): number[] {
    let oneNum = 0
    for (let i = 0; i < str.length; i++) {
      oneNum += +str[i]
    }
    return [str.length - oneNum, oneNum]
  }
};


/**
 * 动态规划解法
 */

function findMaxFormDP(strs: string[], m: number, n: number): number {
  var dp: number[][] = []
  for (var i = 0; i <= m; i++) {
    dp[i] = []
    for (var j = 0; j <= n; j++) {
      dp[i][j] = 0
    }
  }
  for (let str of strs) {
    let [zeroNum, oneNum] = getOneAndZeroNum(str)

    for (var i = m; i >= zeroNum; i--) {
      for (var j = n; j >= oneNum; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - zeroNum][j - oneNum] + 1)
      }
    }
  }

  return dp[m][n]

  function getOneAndZeroNum(str: string): number[] {
    let oneNum = 0
    for (let i = 0; i < str.length; i++) {
      oneNum += (+str[i])
    }
    return [str.length - oneNum, oneNum]
  }
};

