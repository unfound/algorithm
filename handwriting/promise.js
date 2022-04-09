var Status;
(function (Status) {
    Status["PENDING"] = "pending";
    Status["FULFILLED"] = "fulfilled";
    Status["REJECTED"] = "rejected";
})(Status || (Status = {}));

const Promise = /** @class */ (function () {
    function Promise(executor) {
        var _this = this;
        this.status = Status.PENDING;
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];
        var resolve = function (data) {
            if (_this.status === Status.PENDING) {
                _this.status = Status.FULFILLED;
                _this.value = data;
                _this.onResolvedCallbacks.forEach(function (cb) { return cb(data); });
            }
        };
        var reject = function (err) {
            if (_this.status === Status.PENDING) {
                _this.status = Status.REJECTED;
                _this.reason = err;
                _this.onRejectedCallbacks.forEach(function (cb) { return cb(err); });
            }
        };
        executor(resolve, reject);
    }
    Promise.prototype.then = function (onFulfilled, onRejected) {
        var _this = this;
        // 解决 onFufilled，onRejected 没有传值的问题
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : function (data) { return data; };
        // 因为错误的值要让后面访问到，所以这里也要抛出错误，不然会在之后 then 的 resolve 中捕获
        onRejected = typeof onRejected === 'function' ? onRejected : function (err) { throw err; };
        let p = new Promise(function (resolve, reject) {
            if (_this.status === Status.FULFILLED) {
                setTimeout(function () {
                    runPromiseStatus(onFulfilled, _this.value, p, resolve, reject);
                }, 0)
            }
            else if (_this.status === Status.REJECTED) {
                setTimeout(function () {
                    runPromiseStatus(onRejected, _this.reason, p, resolve, reject);
                }, 0)
            }
            else {
                _this.onResolvedCallbacks.push(function () {
                    setTimeout(function () {
                        runPromiseStatus(onFulfilled, _this.value, p, resolve, reject);
                    }, 0)
                });
                _this.onRejectedCallbacks.push(function () {
                    setTimeout(function () {
                        runPromiseStatus(onRejected, _this.reason, p, resolve, reject);
                    }, 0)
                });
            }
        });
        return p;
    };
    return Promise;
}());
function runPromiseStatus(runFn, data, p, resolve, reject) {
    try {
        const res = runFn(data);
        resolveResult(res, p, resolve, reject);
    }
    catch (e) {
        reject(e);
    }
}
function resolveResult(result, p, resolve, reject) {
    if (p === result) {
        return reject(new TypeError("Chaining cycle detected for promise #<Promise>"));
    }
    var called;
    if ((result != null && typeof result === 'object') || typeof result === 'function') {
        try {
            const then = result.then;
            if (typeof then === 'function') {
                then.call(result, function (data) {
                    if (called)
                        return;
                    called = true;
                    resolveResult(data, p, resolve, reject);
                }, function (err) {
                    if (called)
                        return;
                    called = true;
                    reject(err);
                });
            }
            else {
                resolve(result);
            }
        }
        catch (e) {
            if (called)
                return;
            called = true;
            reject(e);
        }
    }
    else {
        resolve(result);
    }
}

// promise.js
// 这里是上面写的 Promise 全部代码
Promise.defer = Promise.deferred = function () {
    let dfd = {}
    dfd.promise = new Promise((resolve,reject)=>{
        dfd.resolve = resolve;
        dfd.reject = reject;
    });
    return dfd;
}
module.exports = Promise;
