function coinChange(coins: number[], amount: number): number {
  let map = new Map()
  function dp (sum: number): number {
      if (map.has(sum)) return map.get(sum)
      if (sum === 0) return 0
      if (sum < 0) return -1

      let min: number = Infinity
      for (let coin of coins) {
          let subSum = dp(sum - coin)
          if (subSum >= 0) {
              min = Math.min(min,  subSum + 1)
          }
      }
      let res = min === Infinity ? -1 : min
      map.set(sum, res)
      return res
  }

  return dp(amount)
}
