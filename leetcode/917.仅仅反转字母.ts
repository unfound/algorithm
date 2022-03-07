function reverseOnlyLetters(s: string): string {
    const arr = s.split('')
    let start = 0, end = arr.length - 1
    const patt = /[a-zA-Z]/
    while (start < end) {
        while (!patt.test(arr[start]) && start < end) {
            start++
        }
        while (!patt.test(arr[end]) && start < end) {
            end--
        }
        if (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]]
            start++
            end--
        }
    }
    return arr.join('')
};

console.log(reverseOnlyLetters('ab-cd'))
console.log(reverseOnlyLetters('a-bC-dEf-ghIj'))
console.log(reverseOnlyLetters('Test1ng-Leet=code-Q!'))
