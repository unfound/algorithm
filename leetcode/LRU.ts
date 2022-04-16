export {}

class LinkNode {
    key: number | undefined
    value: number | undefined
    prev: LinkNode | null = null
    next: LinkNode | null = null

    constructor (key?: number, value?: number) {
        this.key = key
        this.value = value
    }
}

class LinkList {
    head: LinkNode = new LinkNode()
    tail: LinkNode = new LinkNode()
    size: number = 0

    constructor () {
        this.head.next = this.tail
        this.tail.prev = this.head
    }

    add (node: LinkNode) {
        const firstNode = this.head.next
        if (firstNode) {
            node.next = firstNode
            firstNode.prev = node
            this.head.next = node
            node.prev = this.head
        }
        this.size++
    }

    remove (node: LinkNode) {
        ;(node.prev!).next = node.next
        ;(node.next!).prev = node.prev
        node.next = null
        node.prev = null
        this.size--
    }

    moveToFirst (node: LinkNode) {
        if (this.size > 1) {
            ;(node.prev!).next = node.next
            ;(node.next!).prev = node.prev
            this.add(node)
        }
    }

    pop () {
        let lastNode = this.tail.prev
        if (this.size > 0 && lastNode) {
            ;(lastNode.prev!).next = this.tail
            this.tail.prev = lastNode.prev
            lastNode.next = null
            lastNode.prev = null
        }
        this.size--
        return lastNode
    }

    toArray () {
        const arr = []
        let cur = this.head.next
        while (cur!.next) {
            arr.push(cur!.value)
            cur = cur!.next
        }
        return arr
    }
}

class LRUCache {
    size: number
    lru: Record<number, LinkNode | undefined> = {}
    list: LinkList = new LinkList()
    constructor(capacity: number) {
        this.size = capacity
    }

    get(key: number): number {
        const node = this.lru[key]
        if (!node) {
            return -1
        }
        this.list.moveToFirst(node)
        return node.value!
    }

    put(key: number, value: number): void {
        const node = new LinkNode(key, value)
        if (this.lru[key]) {
            this.list.remove(this.lru[key]!)
        }
        if (this.list.size >= this.size) {
            const n = this.list.pop()
            this.lru[n!.key!] = undefined
        }
        this.lru[key] = node
        this.list.add(node)
    }
}

const cache = new LRUCache( 2 /* 缓存容量 */ )

cache.put(1, 1)
cache.put(2, 2)
console.log(cache.get(1))       // 返回  1
cache.put(3, 3)    // 该操作会使得密钥 2 作废
console.log(cache.get(2))       // 返回 -1 (未找到)
cache.put(4, 4)    // 该操作会使得密钥 1 作废
console.log(cache.get(1))       // 返回 -1 (未找到)
console.log(cache.get(3))       // 返回  3
console.log(cache.get(4))      // 返回  4

const cache2 = new LRUCache( 2 /* 缓存容量 */ )

console.log(cache2.get(2))
cache2.put(2, 6)
console.log(cache2.get(1))
cache2.put(1, 5)
cache2.put(1, 2)
console.log(cache2.get(1))
console.log(cache2.get(2))

// ["LRUCache","put","put","put","put","put","get","put","get","get","put","get","put","put","put","get","put","get","get","get","get","put","put","get","get","get","put","put","get","put","get","put","get","get","get","put","put","put","get","put","get","get","put","put","get","put","put","put","put","get","put","put","get","put","put","get","put","put","put","put","put","get","put","put","get","put","get","get","get","put","get","get","put","put","put","put","get","put","put","put","put","get","get","get","put","put","put","get","put","put","put","get","put","put","put","get","get","get","put","put","put","put","get","put","put","put","put","put","put","put"]
// [[10],[10,13],[3,17],[6,11],[10,5],[9,10],[13],[2,19],[2],[3],[5,25],[8],[9,22],[5,5],[1,30],[11],[9,12],[7],[5],[8],[9],[4,30],[9,3],[9],[10],[10],[6,14],[3,1],[3],[10,11],[8],[2,14],[1],[5],[4],[11,4],[12,24],[5,18],[13],[7,23],[8],[12],[3,27],[2,12],[5],[2,9],[13,4],[8,18],[1,7],[6],[9,29],[8,21],[5],[6,30],[1,12],[10],[4,15],[7,22],[11,26],[8,17],[9,29],[5],[3,4],[11,30],[12],[4,29],[3],[9],[6],[3,4],[1],[10],[3,29],[10,28],[1,20],[11,13],[3],[3,12],[3,8],[10,9],[3,26],[8],[7],[5],[13,17],[2,27],[11,15],[12],[9,19],[2,15],[3,16],[1],[12,17],[9,1],[6,19],[4],[5],[5],[8,1],[11,7],[5,2],[9,28],[1],[2,2],[7,4],[4,22],[7,24],[9,26],[13,28],[11,26]]