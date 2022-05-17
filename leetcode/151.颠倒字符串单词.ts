function reverseWords(s: string): string {
    const l = s.length
    let str = ''
    let word = ''
    for (let i = 0; i < l; i++) {
        if (s[i] !== ' ') {
            word = ''
            while (s[i] !== ' ' && i < l) {
                word += s[i++]
            }
            str = word + ' ' + str
        }
    }

    return str.trim()
};

console.log(reverseWords(" the sky is   blue "))

