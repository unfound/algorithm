export {}

class LRUCache {
    size: number
    lru: Map<number, number>
    constructor(capacity: number) {
        this.size = capacity
        this.lru = new Map()
    }

    get(key: number): number {
        console.log(this.lru)
        const val = this.lru.get(key)
        if (val == null) {
            return -1
        }
        this.lru.delete(key)
        this.lru.set(key, val)
        return val
    }

    put(key: number, value: number): void {
        // 这一步特别注意，如果已有key的话其实是不占空间的
        // 所以先删除再设置（相当于默认更新新鲜度）
        if (this.lru.has(key)) {
            this.lru.delete(key)
        }
        if (this.lru.size >= this.size) {
            const expiredKey = this.lru.keys().next().value
            if (expiredKey != null) {
                this.lru.delete(expiredKey)
            }
        }
        this.lru.set(key, value)
    }
}

// const cache = new LRUCache( 2 /* 缓存容量 */ )

// cache.put(1, 1)
// cache.put(2, 2)
// console.log(cache.get(1))       // 返回  1
// cache.put(3, 3)    // 该操作会使得密钥 2 作废
// console.log(cache.get(2))       // 返回 -1 (未找到)
// cache.put(4, 4)    // 该操作会使得密钥 1 作废
// console.log(cache.get(1))       // 返回 -1 (未找到)
// console.log(cache.get(3))       // 返回  3
// console.log(cache.get(4))      // 返回  4

// ["LRUCache","get","put","get","put","put","get","get"]
// [[2],[2],[2,6],[1],[1,5],[1,2],[1],[2]]
const cache2 = new LRUCache( 2 /* 缓存容量 */ )

console.log(cache2.get(2))
cache2.put(2, 6)
console.log(cache2.get(1))
cache2.put(1, 5)
cache2.put(1, 2)
console.log(cache2.get(1))
console.log(cache2.get(2))
