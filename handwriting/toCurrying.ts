export {}

// 这种方式只适用于连续调用的情况
function curry (fn: Function) {
    const judge = (...args: unknown[]) => {
        if (args.length === fn.length) return fn(...args)
        return (...arg: unknown[]) => judge(...args, ...arg)
    }

    return judge
}

function add (a: number, b: number, c: number) {
    return a + b + c
}

const curryAdd = curry(add)
console.log(curryAdd(1)(2)(3))
// console.log(curryAdd(2))
// console.log(curryAdd(3))