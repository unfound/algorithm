function throttle (fn: Function, ms: number) {
    let last: number = 0
    return function (this: unknown) {
        const now = Date.now()
        if (now - last > ms) {
            fn.call(this, arguments)
            last = now
        }
    }
}