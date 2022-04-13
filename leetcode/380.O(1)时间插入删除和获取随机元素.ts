export {}

class RandomizedSet {
    stack: number[] = []
    keyMap: Record<number, number | undefined> = {}
    key: number = 0
    constructor() {}

    insert(val: number): boolean {
        if (this.keyMap[val] != void 0) {
            return false
        }
        this.keyMap[val] = this.key++
        this.stack.push(val)
        console.log('insert', this.stack)
        return true
    }

    remove(val: number): boolean {
        if (this.keyMap[val] == void 0) {
            return false
        }
        const key = this.keyMap[val]
        const lastValue = this.stack.pop()
        if (key !== this.key - 1) {
            this.stack[key!] = lastValue!
            this.keyMap[lastValue!] = key
        }
        this.keyMap[val] = undefined
        this.key--
        console.log('remove', this.stack)
        return true
    }

    getRandom(): number {
        const index = Math.floor(Math.random() * this.key)
        console.log('get', this.stack)
        return this.stack[index]
    }
}

const randomizedSet = new RandomizedSet()
console.log(randomizedSet.insert(1)) // 向集合中插入 1 。返回 true 表示 1 被成功地插入。
console.log(randomizedSet.remove(2)) // 返回 false ，表示集合中不存在 2 。
console.log(randomizedSet.insert(2)) // 向集合中插入 2 。返回 true 。集合现在包含 [1,2] 。
console.log(randomizedSet.getRandom()) // getRandom 应随机返回 1 或 2 。
console.log(randomizedSet.remove(1)) // 从集合中移除 1 ，返回 true 。集合现在包含 [2] 。
console.log(randomizedSet.insert(2)) // 2 已在集合中，所以返回 false 。
console.log(randomizedSet.getRandom()) // 由于 2 是集合中唯一的数字，getRandom 总是返回 2 。

// console.log('================')

const r2 = new RandomizedSet()
console.log(r2.insert(0))
console.log(r2.insert(1))
console.log(r2.remove(0))
console.log(r2.insert(2))
console.log(r2.remove(1))
console.log(r2.getRandom())
