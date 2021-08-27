class CQueue {
    inStack: Array<number>
    outStack: Array<number>

    constructor() {
        this.inStack = []
        this.outStack = []
    }

    appendTail(value: number): void {
        this.inStack.push(value)
    }

    deleteHead(): number {
        if (this.outStack.length <= 0) {
            while (this.inStack.length > 0) {
                this.outStack.push(this.inStack.pop())
            }
        }

        const res = this.outStack.pop()
        return res ? res : -1
    }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */