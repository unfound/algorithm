function getPermutationMy(n: number, k: number): string {
    const arr: number[] = []
    let nList = new Array(n).fill(0).map((_, i) => i + 1)
    k--
    for (let i = 1; i <= n; i++) {
        const fa = factorial(n - i)
        const index = Math.floor(k / fa)
        arr.push(nList[index])
        nList.splice(index, 1)
        k = k % fa
    }
    return arr.join('')
};

export function factorial (n: number): number {
    if (n <= 0) return 1;
    let result = 1
    for (let i = 1; i <= n; i++) {
        result *= i
    }
    return result
}

function getPermutation(n: number, k: number): string {
    const arr: number[] = []
    k--  // 下标从0开始所以先-1方便计算
    // 生成0 ~ n-1的阶乘数组
    const factorial: number[] = []
    factorial.push(1)
    for (let i = 1; i < n; i++) {
        factorial[i] = factorial[i - 1] * i
    }
    // 这里很巧妙地用一个长度n + 1值全为1的数组来表示对应数值是否被使用，1未使用，0已使用
    const nList = new Array(n + 1).fill(1)
    for (let i = 1; i <= n; i++) {
        let index = Math.floor(k / factorial[n - i]) + 1 // 这边 +1 是因为下标从1开始
        for (let j = 1; j <= n; j++) {
            // 这里其实相当于数第index个还有值（值为1）的数，该位置的数值与j相同
            index -= nList[j]
            if (index === 0) {
                arr.push(j)
                nList[j] = 0
                break
            }
        }
        k = k % factorial[n - i]
    }
    return arr.join('')
};

console.log(getPermutation(3, 3))
console.log(getPermutation(4, 9))
console.log(getPermutation(3, 1))
console.log(getPermutation(2, 1))
