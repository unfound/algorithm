function longestPalindrome(s: string): string {
  let maxLength = 0
  let maxStr = ''

  for (let i = 0; i < s.length; i++) {
    let left = i, right = i, flag = false
    for (; left >= 0 && right < s.length;) {
      if (!flag && s[left - 1] === s[left]) {
        left--
      } else if (!flag && s[right + 1] === s[right]) {
        right++
      } else if (s[right + 1] && s[left -1] && s[right + 1] === s[left -1]) {
        flag = true
        left--
        right++
      } else {
        break
      }
    }

    if (right + 1 - left > maxLength) {
      maxLength = right + 1 - left
      maxStr = s.slice(left, right + 1)
    }
  }

  return maxStr
};

function longestPalindrome2(s: string): string {
  if (s.length <= 1) return s
  let length = s.length
  let maxLength = 0
  let maxStr = ''

  let dp = new Array(length).fill(false)
  dp = dp.map(() => new Array(length).fill(false))

  for (let j = 0; j < length; j++) {
    for (let i = 0; i <= j; i++) {
      if (i === j) {
        dp[i][j] = true
      } else if (i + 1 === j) {
        dp[i][j] = s[i] === s[j]
      } else {
        dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1]
      }

      if (dp[i][j] && j - i + 1 > maxLength) {
        maxLength = j - i + 1
        maxStr = s.slice(i, j + 1)
      }
    }
  }

  return maxStr
};

// manachaer算法
function longestPalindrome3(s: string): string {
  if (s.length <= 1) return s
  let length = s.length
  let maxLength = 0
  let newS = '!#'
  for (let i = 0; i < length; i++) {
    newS += `${s[i]}#`
  }
  newS += '$'
  // dp数组表示第 i 个位置的最长回文字符串的臂长
  // 这里的臂长指的是该回文长度 = 2 * length + 1的时候，这个length就是臂长，臂长正好等于原回文字符串的长度
  let dp = []
  // 最大回文字符串的右边界
  let maxRight = 0
  // 最大回文字符串的中心
  let center = 0
  // 最大回文的起始点
  let maxLengthStart = 0

  for (let i = 0; i < newS.length; i++) {
    dp[i] = 0  // 初始值为0
    if (i < maxRight) {
      let mirror = 2 * center - i
      dp[i] = Math.min(dp[mirror], maxRight - i)
    }
    // 直接跳过dp[i]中已存储的回文臂长
    let left = i - dp[i] - 1
    let right = i + dp[i] + 1
    while (left >= 0 && right < newS.length && newS[left] === newS[right]) {
      dp[i]++
      left--
      right++
    }

    if (dp[i] > maxLength) {
      maxLength = dp[i]
      maxRight = i + dp[i]
      center = i
      maxLengthStart = Math.ceil((i - dp[i]) / 2) - 1
    }
  }

  return s.slice(maxLengthStart, maxLengthStart + maxLength)
};