let targetMap = new WeakMap()
let activeEffect

class Deps {
    list = new Set()

    depend () {
        if (activeEffect) {
            this.list.add(activeEffect)
        }
    }
    notify () {
        this.list.forEach(effect => effect())
    }
}

function effect (fn) {
    activeEffect = fn
    activeEffect()
    activeEffect = null
}

function getDeps (target, prop) {
    let depsMap = targetMap.get(target)
    if (!depsMap) {
        depsMap = new Map()
        targetMap.set(target, depsMap)
    }
    let deps = depsMap.get(prop)
    if (!deps) {
        deps = new Deps()
        depsMap.set(prop, deps)
    }

    return deps
}

function reactive (obj) {
    return new Proxy(obj, {
        get (target, prop, receiver) {
            const deps = getDeps(target, prop)
            deps.depend()
            return Reflect.get(target, prop, receiver)
        },
        set (target, prop, newVal, receiver) {
            const deps = getDeps(target, prop)
            if (Reflect.get(target, prop, receiver) !== newVal) {
                const value = Reflect.set(target, prop, newVal, receiver)
                deps.notify()
                return value
            }
            return false
        }
    })
    // Object.keys(obj).forEach(key => {
    //     const deps = new Deps()
    //     let curVal = obj[key]
    //     Object.defineProperty(obj, key, {
    //         get () {
    //             deps.depend()
    //             return curVal
    //         },
    //         set (newVal) {
    //             if (newVal !== curVal) {
    //                 curVal = newVal
    //                 deps.notify()
    //             }
    //         }
    //     })
    // })
}


const state = reactive({
    a: 1
})

effect(() => {
    console.log(state.a)
})

state.a = 2

