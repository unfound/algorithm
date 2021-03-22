function findMaxForm(strs: string[], m: number, n: number): number {
  let strLengthMap: Map<string, number[]> = new Map()
  for (let str of strs) {
    strLengthMap.set(str, getStrLength(str))
  }

  return dp(strs, [])

  function dp (str: string[], subs: string[]) {
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

  function getStrLength (str: string): number[] {
    let oneNum = 0
    for (let i = 0; i < str.length; i++) {
      oneNum += +str[i]
    }
    return [str.length - oneNum, oneNum]
  }
};
