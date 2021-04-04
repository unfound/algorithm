function findSubstringInWraproundString(p: string): number {
  if (p.length <= 0) return 0

  let map: Map<string, boolean> = new Map()
  let set = new Set()
  for (let i = 0; i < p.length; i++) {
    set.add(p[i])
  }
  let res = set.size

  for (let window = 2; window <= p.length; window++) {
    for (let start = 0; start <= p.length - window; start++) {
      let end = start + window - 1
      let str = p.slice(start, end + 1)
      if (set.has(str)) continue
      set.add(str)
      if (isSubstring(p, start, end, window)) {
        res++
      }
    }
  }

  return res

  function isSubstring (p: string, start: number, end: number, window: number): boolean {
    if (start === end) return true
    let key = start + ',' + end
    let bool = map.get(key)
    if (bool) return true
    if (end - start === 1) {
      if ((p[end] === 'a' && p[start] === 'z') || p[end].charCodeAt(0) - p[start].charCodeAt(0) === 1) {
        map.set(key, true)
        return true
      } else {
        return false
      }
    }
    // 子集中符合子字符串的必定被存储了，未被存储的都是false的也就直接剪枝就行
    if (end - start < window - 1) return false
    if (isSubstring(p, start, end - 1, window) && isSubstring(p, end - 1, end, window)) {
      map.set(key, true)
      return true
    } else {
      return false
    }
  }
};

function findSubstringInWraproundString2(p: string): number {
  if (p.length <= 0) return 0

  let dp = new Array(26).fill(0)
  dp[getCharIndex(p[0])] = 1
  let num = 1
  for (var i = 1; i < p.length; i++) {
    if (p[i] + p[i-1] === 'az' || getCharIndex(p[i]) - getCharIndex(p[i - 1]) === 1) {
      num++
    } else {
      num = 1
    }

    dp[getCharIndex(p[i])] = Math.max(dp[getCharIndex(p[i])], num)
  }

  return dp.reduce((prev, cur) => prev + cur)

  function getCharIndex (char: string): number {
    return char.charCodeAt(0) - 'a'.charCodeAt(0)
  }
};