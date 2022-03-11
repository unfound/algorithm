function lengthOfLongestSubstringOld(s: string): number {
    if (s.length <= 1) return s.length
    const arr:string[] = s.split('')
    let maxLength = 1
    for (let i = 0; i < arr.length; i++) {
        let currentLength = 1
        for (let j = i + 1; j < arr.length; j++) {
            let isInIJ = false
            for (let k = i; k < j; k++) {
                if (arr[k] === arr[j]) {
                    isInIJ = true
                    break
                }
            }
            if (!isInIJ) {
                currentLength++
            } else {
                break
            }
        }
        maxLength = Math.max(maxLength, currentLength)
    }
    console.log(maxLength)
    return maxLength
};

function lengthOfLongestSubstringOld2(s: string): number {
    if (s.length <= 1) return s.length
    const arr:string[] = s.split('')
    const letterMap = new Map<string, number>()
    let maxLength = 1
    let last = 0
    for (let i = 0; i < arr.length; i++) {
        const letterIndex = letterMap.get(arr[i])
        if (typeof letterIndex === 'number' && letterIndex >= last) {
            maxLength = Math.max(maxLength, i - last)
            last = letterIndex + 1
        } else if (i === arr.length - 1) {
            maxLength = Math.max(maxLength, i - last + 1)
        }
        letterMap.set(arr[i], i)
    }
    console.log(maxLength)
    return maxLength
};

function lengthOfLongestSubstring(s: string): number {
    if (s.length <= 1) return s.length
    let maxLength = 1
    let left = 0
    let right = 0
    const letterMap = new Map<string, number>()
    while (right < s.length) {
        const letterIndex = letterMap.get(s.charAt(right))
        left = Math.max(left, letterIndex || 0)
        maxLength = Math.max(maxLength, right - left + 1)
        letterMap.set(s.charAt(right), right + 1)
        right++
    }
    console.log(maxLength)
    return maxLength
};

lengthOfLongestSubstring("pwwkew")
lengthOfLongestSubstring("abcabcbb")
lengthOfLongestSubstring("bbbbb")
lengthOfLongestSubstring("au")
lengthOfLongestSubstring("auu")
lengthOfLongestSubstring("tmmzuxt")