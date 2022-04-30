export {}

function longestCommonPrefix(strs: string[]): string {
    if (strs.length <= 1) return strs[0] || ''

    let commonPrefix = ''
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0].charAt(i)
        let isSame = true
        for (let j = 0; j < strs.length; j++) {
            if (char !== strs[j].charAt(i)) {
                isSame = false
                break
            }
        }
        if (isSame) {
            commonPrefix += char
        } else {
            break
        }
    }

    return commonPrefix
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))
