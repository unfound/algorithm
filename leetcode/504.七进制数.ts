function convertToBase7(num: number): string {
    if (num === 0) return num + ''
    let numList = []
    let sign = num > 0 ? '' : '-'
    let current = Math.abs(num)
    while (current > 0) {
        numList.push(current % 7)
        current = Math.floor(current / 7)
    }
    return sign + numList.reverse().join('')
};

console.log(convertToBase7(100))
console.log(convertToBase7(-7))
console.log(convertToBase7(0))
