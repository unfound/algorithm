function toCurrying (fn, ...initArgs) {
    const _this = this
    const fnLength = fn.length
    const args = initArgs || []

    return function () {
        const _args = Array.prototype.slice.call(arguments)
        // Array.prototype.push.apply(args, _args)
        args.push(..._args)

        if (args.length >= fnLength) {
            return fn.apply(_this, args)
        }

        return toCurrying.call(_this, fn, args)
    }
}

function add (a, b, c) {
    return a + b + c
}

const curryAdd = toCurrying(add, 2)
console.log(curryAdd(1))
console.log(curryAdd(2))
console.log(curryAdd(3))

function multiAdd () {
    const _args = Array.prototype.slice.call(arguments)

    const _add = function () {
        _args.push(...arguments)
        return _add
    }

    _add.toString = function () {
        return _args.reduce((total, curr) => total + curr, 0)
    }

    return _add
}

console.log('============')
console.log(multiAdd(1)(2)(3) == 6)
console.log(multiAdd(1,2,3)(4) == 10)
console.log(multiAdd(1)(2)(3, 4)(5) == 15)