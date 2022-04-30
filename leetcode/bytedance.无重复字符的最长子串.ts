export {}

function lengthOfLongestSubstringOld(s: string): number {
    if (s.length <= 0) return 0
    let maxLength = 1
    let start = 0, end = 1
    while (end < s.length) {
        let isSame = false
        let sameStart = start
        for (let i = start; i < end; i++) {
            if (s[end] === s[i]) {
                isSame = true
                sameStart = i
                break
            }
        }
        // console.log(start, end)
        if (isSame) {
            // console.log(start, end)
            maxLength = Math.max(maxLength, end - start)
            start = sameStart + 1
        } else if (end === s.length - 1) {
            maxLength = Math.max(maxLength, end - start + 1)
        }
    
        end++
    }

    return maxLength
};

function lengthOfLongestSubstring(s: string): number {
    let maxLength = 0, start = 0
    let map = new Map<string, number>()
    for (let end = 0; end < s.length; end++) {
        const char = s.charAt(end)
        if (map.has(char)) {
            start = Math.max(start, map.get(char)! + 1)
        }
        maxLength = Math.max(maxLength, end - start + 1)
        map.set(char, end)
    }
    return maxLength
};

console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('bbbbb'))
console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring('dvdf'))
console.log(lengthOfLongestSubstring('au'))
