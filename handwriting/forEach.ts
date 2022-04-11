interface Array<T> {
    forEach2: (cb: CbType, thisArg?: unknown) => void
}

type CbType = (val: unknown, key: number, arr: unknown[], ...other: unknown[]) => unknown

Array.prototype.forEach2 = function (cb: CbType, thisArg?: unknown) {
    const arr: Array<unknown> = Object(this)
    const len = arr.length >>> 0
    for (let i = 0; i < len; i++) {
        if (i in arr) {
            cb.call(thisArg, arr[i], i, arr)
        }
    }
}

;[1, 2, 3].forEach2((val, key, arr) => {
    console.log(key, val)
    console.log(arr)
})