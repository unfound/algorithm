function mulitPromise (limit, arr, fn) {
  let i = 0
  let exceting = []
  let res = []

  function queue () {
    if (i >= arr.length) {
      return Promise.resolve()
    }

    let p = Promise.resolve().then(() => fn(arr[i++], arr))
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