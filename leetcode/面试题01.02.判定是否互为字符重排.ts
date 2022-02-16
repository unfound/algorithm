export {}

function CheckPermutation(s1: string, s2: string): boolean {
    if (s1.length !== s2.length) {
        return false
    }
    let sortS1 = s1.split('').sort().join()
    let sortS2 = s2.split('').sort().join()
    if (sortS1 === sortS2) {
        return true
    } else {
        return false
    }
};

console.log(CheckPermutation('abc', 'bca'))
console.log(CheckPermutation('abc', 'bcd'))