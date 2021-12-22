function repeatedStringMatch(a: string, b: string): number {
    if (!b) return 0
    const aLen = a.length
    const bLen = b.length
    let str = a
    let times = 0
    let hasSubstring = false
    while (str.length <= 2 * aLen + bLen) {
        times++
        console.log(`str: ${str}, b: ${b}`)
        if (str.includes(b)) {
            hasSubstring = true
            break
        }
        str += a
    }
    return hasSubstring ? times : -1
};

let a = 'abc'
let b = 'cabcabca'
console.log(repeatedStringMatch(a, b))
