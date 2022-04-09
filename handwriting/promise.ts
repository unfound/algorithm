export {}

enum Status {
    PENDING = 'pending',
    FULFILLED = 'fulfilled',
    REJECTED = 'rejected'
}

type Resolve = (data: unknown) => void
type Reject = (err: unknown) => void
type Executor = (resolve: Resolve, reject: Reject) => unknown
type onFulfilled = (data: unknown) => unknown
type onRejected = (err: unknown) => unknown

class Promise {
    status: Status = Status.PENDING
    value: unknown
    reason: unknown
    onResolvedCallbacks: Function[] = []
    onRejectedCallbacks: Function[] = []

    static resolve (data: unknown) {
        return new Promise((resolve) => resolve(data))
    }

    static reject (err: unknown) {
        return new Promise((_, reject) => reject(err))
    }

    constructor (executor: Executor) {
        const resolve: Resolve = (data: unknown) => {
            if (this.status === Status.PENDING) {
                this.status = Status.FULFILLED
                this.value = data
                this.onResolvedCallbacks.forEach(cb => cb(data))
            }
        }
    
        const reject:Reject = (err: unknown) => {
            if (this.status === Status.PENDING) {
                this.status = Status.REJECTED
                this.reason = err
                this.onRejectedCallbacks.forEach(cb => cb(err))
            }
        }
        executor(resolve, reject)
    }

    then (onFulfilled?: onFulfilled, onRejected?: onRejected) {
        // 解决 onFufilled，onRejected 没有传值的问题
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (data: unknown) => data
        // 因为错误的值要让后面访问到，所以这里也要抛出错误，不然会在之后 then 的 resolve 中捕获
        onRejected = typeof onRejected === 'function' ? onRejected : (err: unknown) => { throw err }
        
        const p = new Promise((resolve, reject) => {
            if (this.status === Status.FULFILLED) {
                runPromiseStatus(onFulfilled!, this.value, p, resolve, reject)
            } else if (this.status === Status.REJECTED) {
                runPromiseStatus(onRejected!, this.reason, p, resolve, reject)
            } else {
                this.onResolvedCallbacks.push(() => {
                    runPromiseStatus(onFulfilled!, this.value, p, resolve, reject)
                })
                this.onRejectedCallbacks.push(() => {
                    runPromiseStatus(onRejected!, this.reason, p, resolve, reject)
                })
            }
        })

        return p
    }
}
// 这里提取出来一个单独的函数将无法通过测试
// 为何？
// 测试结果是和setTimeout有关，把setTimeout移出去就可以了
// 为何？
function runPromiseStatus (runFn: Function, data: unknown, p: Promise, resolve: Resolve ,reject: Reject) {
    setTimeout(() => {
        try {
            const res = runFn(data)
            resolveResult(res, p, resolve, reject)
        } catch (e) {
            reject(e)
        }
    }, 0)

}

function resolveResult (result: unknown, p: Promise, resolve: Resolve ,reject: Reject) {
    if (p === result) {
        return reject(new TypeError("Chaining cycle detected for promise #<Promise>"))
    }
    let called: Boolean | undefined

    if ((result != null && typeof result === 'object') || typeof result === 'function') {
        try {
            const then = (result as any).then
            if (typeof then === 'function') {
                then.call(
                    result,
                    (data: unknown) => {
                        if (called) return
                        called = true
                        resolveResult(data, p, resolve, reject)
                    },
                    (err: unknown) => {
                        if (called) return
                        called = true
                        reject(err)
                    }
                )
            } else {
                resolve(result)
            }
        } catch (e) {
            if (called) return
            called = true
            reject(e)
        }
    } else {
        resolve(result)
    }
}

// var p = new Promise(resolve => {
//     setTimeout(() => {
//         resolve(222)
//     }, 200)
// })

// var pip = p.then(data => {
//     console.log(data)
//     return pip
// }, err => {
//     console.log(err)
// })
// pip.then(
//     () => {},
//     err => {
//         console.log('err')
//         console.log(err)
//     }
// )

// const p = new Promise(resolve => {
//     setTimeout(() => {
//         resolve(111)
//     }, 200)
// })

// p.then(data => {
//     console.log('---1---')
//     console.log(data)
// }).then(data => {
//     console.log('---2---')
//     console.log(data)
//     return new Promise(r => {
//         setTimeout(() => {
//             r(222)
//         }, 20)
//     })
// }).then(l => {
//     console.log('---4---')
//     console.log(l)
// })

// p.then(data => {
//     console.log('---3---')
//     console.log(data)
// })

// promise.js
// 这里是上面写的 Promise 全部代码
// Promise.defer = Promise.deferred = function () {
//     let dfd = {}
//     dfd.promise = new Promise((resolve,reject)=>{
//         dfd.resolve = resolve;
//         dfd.reject = reject;
//     });
//     return dfd;
// }
// module.exports = Promise;
