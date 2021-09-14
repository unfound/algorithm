function mulitPromise (limit, arr, fn) {
  let i = 0
  let exceting = []
  let res = []

  function queue () {
    if (i >= arr.length) {
      return Promise.resolve()
    }

    let p = Promise.resolve().then(() => fn(i++, arr))
    res.push(p)

    let e = p.then(() => exceting.splice(exceting.indexOf(e), 1))
    exceting.push(e)

    let r = Promise.resolve()
    if (exceting.length >= limit) {
      r = Promise.race(exceting)
    }

    return r.then(() => queue())
  }

  return queue().then(() => Promise.all(res))
}

function limitPromise (limit, arr, fn) {
  let queue = []
  let res = []
  let i = 0
  return new Promise(resolve => {
    function task () {
      if (i >= arr.length) {
        return resolve(Promise.all(res))
      }
      const p = Promise.resolve().then(() => fn(i++, arr))
      res.push(p)
  
      const e = p.then(() => queue.splice(queue.indexOf(e), 1))
      queue.push(e)
  
      let r = Promise.resolve()
      if (queue.length >= limit) {
        r = Promise.race(queue)
      }
  
      r.then(() => task())
    }
    task()
  })
}

function fn (i, arr) {
  return new Promise(resolve => {
    const startTime = Date.now()
    console.log(`第${i}个请求发送`)
    setTimeout(() => {
      console.log(`收到第${i}个请求, 用时: ${Date.now() - startTime}`)
      resolve(i)
    }, arr[i])
  })
}

var arr = [1000,2000,10000,3000,10000,5000,6000,1000,10000,300,6000]

var res = limitPromise(3, arr, fn)

res.then(all => console.log(all))
