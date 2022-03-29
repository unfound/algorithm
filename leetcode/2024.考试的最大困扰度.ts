function maxConsecutiveAnswers(answerKey: string, k: number): number {
    function maxChars (answerKey: string, k: number, char: string) {
        let res = 0
        let notEqualsNum = 0
        for (let left = 0, right = 0; right < answerKey.length; right++) {
            notEqualsNum += answerKey.charAt(right) === char ? 0 : 1
            while (notEqualsNum > k) {
                notEqualsNum -= answerKey.charAt(left++) === char ? 0 : 1
            }
            res = Math.max(res, right - left + 1)
        }
        return res
    }

    return Math.max(maxChars(answerKey, k, 'T'), maxChars(answerKey, k, 'F'))
}

console.log(maxConsecutiveAnswers('TTFTTFTT', 1))
console.log(maxConsecutiveAnswers('TFFT', 1))
console.log(maxConsecutiveAnswers('TTFF', 2))
