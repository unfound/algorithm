function debounce (fn: Function, ms: number) {
    let timer: number
    return function (this: unknown, ...args: unknown[]) {
        clearTimeout(timer)
        const ctx = this
        timer = setTimeout(() => {
            fn.apply(ctx, args)
        }, ms)
    }
}

const test = debounce((lo: string) => {
    console.log('test' + lo)
}, 20)

test('xxx')
test('sss')