export {}

function getCharNum (char: string): number {
    return char.charCodeAt(0) - 'a'.charCodeAt(0)
}

function checkInclusion(s1: string, s2: string): boolean {
    if (s1.length > s2.length) return false
    if (s1 === s2) return true

    const cnt1: number[] = new Array(26).fill(0)
    const cnt2: number[] = new Array(26).fill(0)
    const s1Length = s1.length
    for (let i = 0; i < s1Length; i++) {
        ++cnt1[getCharNum(s1[i])]
        ++cnt2[getCharNum(s2[i])]
    }
    const cnt1Str = cnt1.toString()
    if (cnt1Str === cnt2.toString()) {
        return true
    }

    for (let i = s1Length; i < s2.length; i++) {
        ++cnt2[getCharNum(s2[i])]
        --cnt2[getCharNum(s2[i - s1Length])]
        if (cnt1Str === cnt2.toString()) {
            return true
        }
    }

    return false
}

console.log(checkInclusion('ab', 'eidbaooo'))
console.log(checkInclusion('ab', 'eidboaooo'))
console.log(checkInclusion('abc', 'bbbca'))
