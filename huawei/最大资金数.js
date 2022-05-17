  /*
  双十一众多商品进行打折销售
  小明想购买自己心仪的一些物品
  但由于购买资金限制
  所以他决定从众多心仪商品中购买三件
  而且想尽可能得花完资金
  现在请你设计一个程序 计算小明尽可能花费的最大资金数

  输入描述：
    输入第一行为一维整型数组m
    数组长度小于100
    数组元素记录单个商品的价格
    单个商品加个小于1000

    输入第二行为购买资金的额度r
    r<100000

  输出描述：
     输出为满足上述条件的最大花费额度

   注意：如果不存在满足上述条件的商品请返回-1

  示例：
     输入
      23,26,36,27
      78
     输出
      76
     说明：
      金额23、26、27得到76而且最接近且小于输入金额78

   示例：
       输入
       23,30,40
       26
       输出
        -1
       说明
       因为输入的商品无法满足3件之和小于26
       故返回-1

   输入格式正确无需考虑输入错误情况

   */

function maxFunds (prices, amount) {
    prices = prices.split(',').map(price => +price).sort((a, b) => a - b)
    if (prices[0] + prices[1] + prices[2] > amount) {
        return -1
    }
    const length = prices.length
    const dp = []
    amount++
    dp[0] = new Array(amount).fill(0).map((item, i) => i >= prices[0] ? prices[0] : 0)
    for (let i = 1; i < length; i++) {
        dp[i] = new Array(amount).fill(0)
        for (let j = prices[0]; j < amount; j++) {
            if (j >= prices[i]) {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - prices[i]] + prices[i])
            } else {
                dp[i][j] = dp[i - 1][j]
            }
        }
    }
    console.log(dp)
    return dp[length - 1][amount - 1]
}

console.log(maxFunds('23,26,36,27', 78))