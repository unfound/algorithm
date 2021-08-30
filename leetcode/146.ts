class LRUCache {
  max: number
  map: Map<number, number>
  constructor(capacity: number) {
    this.max = capacity
    this.map = new Map()
  }

  get(key: number): number {
    const value = this.map.get(key)
    if (value === undefined) return -1
    this.map.delete(key)
    this.map.set(key, value)
    return value
  }

  put(key: number, value: number): void {
    if (this.map.has(key)) {
      this.map.delete(key)
    }
    if (this.map.size >= this.max) {
      this.map.delete(this.map.keys().next().value)
    }
    this.map.set(key, value)
  }
}

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/