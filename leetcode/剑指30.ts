class MinStack {
    minVals: number[]
    stack: number[]

    constructor() {
        this.minVals = []
        this.stack = []
    }

    push(x: number): void {
        if (this.minVals.length <= 0 || x <= this.minVals[this.minVals.length - 1]) {
            this.minVals.push(x)
        }
        this.stack.push(x)
    }

    pop(): void {
        const val = this.stack.pop()
        if (val === this.minVals[this.minVals.length - 1]) {
            this.minVals.pop()
        }
    }

    top(): number {
        return this.stack[this.stack.length - 1]
    }

    min(): number {
        return this.minVals[this.minVals.length - 1]
    }
}