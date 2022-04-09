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
                this.onResolvedCallbacks.forEach(cb => {
                    cb && cb(data)
                })
            }
        }
    
        const reject:Reject = (err: unknown) => {
            if (this.status === Status.PENDING) {
                this.status = Status.REJECTED
                this.reason = err
                this.onRejectedCallbacks.forEach(cb => {
                    cb && cb(err)
                })
            }
        }
        executor(resolve, reject)
    }

    then (onFulfilled?: onFulfilled, onRejected?: onRejected) {
        // 解决 onFufilled，onRejected 没有传值的问题
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (data: unknown) => data
        // 因为错误的值要让后面访问到，所以这里也要抛出错误，不然会在之后 then 的 resolve 中捕获
        onRejected = typeof onRejected === 'function' ? onRejected : (err: unknown) => { throw err }
        
        return new Promise((resolve, reject) => {
            if (this.status === Status.FULFILLED) {
                runPromiseStatus(onFulfilled!, this.value, resolve, reject)
            } else if (this.status === Status.REJECTED) {
                runPromiseStatus(onRejected!, this.reason, resolve, reject)
            } else {
                this.onResolvedCallbacks.push(() => {
                    runPromiseStatus(onFulfilled!, this.value, resolve, reject)
                })
                this.onRejectedCallbacks.push(() => {
                    runPromiseStatus(onRejected!, this.reason, resolve, reject)
                })
            }
        })
    }
}

function runPromiseStatus (runFn: Function, data: unknown, resolve: Resolve ,reject: Reject) {
    setTimeout(() => {
        try {
            const res = runFn(data)
            if (res instanceof Promise) {
                res.then(resolve, reject)
            } else {
                resolve(data)
            }
        } catch (e) {
            reject(e)
        }
    }, 0)

}

const p = new Promise(resolve => {
    setTimeout(() => {
        resolve(111)
    }, 200)
})

p.then(data => {
    console.log('---1---')
    console.log(data)
}).then(data => {
    console.log('---2---')
    console.log(data)
    return new Promise(r => {
        setTimeout(() => {
            r(222)
        }, 20)
    })
}).then(l => {

    console.log('---4---')
    console.log(l)
})

p.then(data => {
    console.log('---3---')
    console.log(data)
})
