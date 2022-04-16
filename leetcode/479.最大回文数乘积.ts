export {}
// n = 8的时候整型数字会溢出
function largestPalindromeold(n: number): number {
    if (n === 1) return 9
    let max = 10 ** n - 1
    for (let i = max; i > 0; i--) {
        let p = i
        for (let j = i; j > 0; j = (j / 10) >>> 0) {
            p = p * 10 + j % 10
        }
        for (let num = max; num * num >= p ;num--) {
            if (p % num === 0) {
                return p % 1337
            }
        }
    }
    return -1
}

function largestPalindrome(n: number): number {
    if (n === 1) return 9
    let max = 10 ** n - 1
    for (let left = max; left > 0; left--) {
        const right = String(left).split('').reverse().join('')
        const p = BigInt(left + right)
        for (let num = BigInt(max); num * num >= p ;num--) {
            if (p % num === BigInt(0)) {
                return Number(p % BigInt(1337))
            }
        }
    }
    return -1
}

// console.log(largestPalindrome(1))
// console.log(largestPalindrome(2))
// console.log(largestPalindrome(3))
// console.log(largestPalindrome(8))
console.log(largestPalindrome(8))
