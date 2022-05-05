export function addStrings(num1: string, num2: string): string {
    if (num1 === '0') return num2
    if (num2 === '0') return num1

    const l1 = num1.length, l2 = num2.length, l = Math.max(l1, l2) + 1
    let result = new Array(l).fill(0)
    let carry = 0 
    for (let i = 1; i <= l; i++) {
        const bit1 = +(num1[l1 - i] || 0)
        const bit2 = +(num2[l2 - i] || 0)
        const sum = bit1 + bit2 + carry
        result[l - i] = sum % 10
        carry = ~~(sum / 10)
    }
    if (result[0] === 0) {
        result = result.slice(1)
    }
    return result.join('')
};

console.log(addStrings('11', '123'))
console.log(addStrings('456', '77'))
console.log(addStrings('456', '789'))
console.log(addStrings('584', '18'))
