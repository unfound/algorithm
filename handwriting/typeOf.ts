function typeOf(obj: unknown) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}

console.log(typeOf(undefined))
console.log(typeOf(null))
console.log(typeOf(0))
console.log(typeOf("0"))
console.log(typeOf(false))
console.log(typeOf(BigInt("123154635164165165")))
console.log(typeOf(Symbol('test')))
console.log(typeOf([]))
console.log(typeOf({}))
console.log(typeOf(function(){}))
console.log(typeOf(new Date()))
console.log(typeOf(new Map()))
console.log(typeOf(new Set()))