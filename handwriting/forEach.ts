interface Array<T> {
    forEach2: Function
}

Array.prototype.forEach2 = function (cb: Function, thisArg: unknown) {
    const obj: Array<unknown> = Object(this)
    console.log(obj)
    console.log(Array.isArray(obj))
    const len = obj.length >>> 0
    for (let i = 0; i < len; i++) {
        if (i in obj) {
            cb.call(thisArg, obj[i], i, obj)
        }
    }
}

;[1, 2, 3].forEach2((val, key, arr) => {
    console.log(key, val)
    console.log(arr)
})