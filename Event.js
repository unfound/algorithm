class MyEvent {
    constructor () {
        this.eventMap = new Map()
    }

    emit (name) {
        const list = this.eventMap.get(name)
        if (list && list.length > 0) {
            list.forEach(cb => cb())
        } else {
            console.log(`No ${name} event`)
        }
    }

    on (name, cb) {
        let list = this.eventMap.get(name)
        if (!list) {
            list = []
        }
        list.push(cb)
        this.eventMap.set(name, list)
    }

    once (name, cb) {
        function handleOnce () {
            this.off(name, handleOnce)
            cb()
        }
        handleOnce = handleOnce.bind(this)
        this.on(name, handleOnce)
    }

    off (name, cb) {
        if (!cb) {
            this.eventMap.delete(name)
        } else {
            let list = this.eventMap.get(name)
            list = list.filter(item => item !== cb)
            this.eventMap.set(name, list)
        }
    }
}

class LimitEvent extends MyEvent {
    constructor (limit) {
        super()
        this.limit = limit
    }

    on (name, cb) {
        let list = this.eventMap.get(name)
        if (!list) {
            list = []
        }
        if (list.length < this.limit) {
            list.push(cb)
        }
        this.eventMap.set(name, list)
    }
}

const ev = new MyEvent()

function log () {
    console.log('ev1 2')
}

ev.on('ev1', () => { console.log('ev1 1') })
ev.on('ev1', log)
ev.emit('ev1')
ev.off('ev1', log)
ev.emit('ev1')
ev.off('ev1')
ev.emit('ev1')

ev.once('onceEv', () => { console.log('onceEv') })
ev.emit('onceEv')
ev.emit('onceEv')
ev.emit('onceEv')

const lev = new LimitEvent(2)
lev.on('lev1', () => { console.log('lev1 1') })
lev.on('lev1', () => { console.log('lev1 2') })
lev.on('lev1', () => { console.log('lev1 3') })
lev.emit('lev1')
