 /*
  小组中每位都有一张卡片
  卡片是6位以内的正整数
  将卡片连起来可以组成多种数字
  计算组成的最大数字

  输入描述：
    ","分割的多个正整数字符串
    不需要考虑非数字异常情况
    小组种最多25个人

   输出描述：
     最大数字字符串

   示例一
     输入
      22,221
     输出
      22221

    示例二
      输入
        4589,101,41425,9999
      输出
        9999458941425101
   */

function getMaxNum (str) {
    const cards = str.split(',')
    cards.sort((a, b) => {
        if (a === b) {
            return 0
        } else {
            return compareByBit(b, a)
        }
    })
    console.log(cards)
    return cards.join('')
}

function compareByBit (str1, str2) {
    const l1 = str1.length
    const l2 = str2.length
    for (let i = 0; i < Math.min(l1, l2); i++) {
        if (str1[i] !== str2[i]) {
            return (+str1[i]) - (+str2[i])
        }
    }
    console.log(str1, str2)
    if (l1 > l2) {
        return (+str1[l2]) - (+str1[0])
    } else {
        return (+str2[0]) - (+str2[l1])
    }
}

console.log(getMaxNum('22,221'))
console.log(getMaxNum('221,22'))
console.log(getMaxNum('4589,101,41425,9999'))