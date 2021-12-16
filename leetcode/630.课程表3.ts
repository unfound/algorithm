export {}

function scheduleCourse(courses: number[][]): number {
    const queue = new Queue()
    courses = courses.filter(item => item[0] <= item[1])
    courses = courses.sort((a, b) => a[1] - b[1])
    for (let i = 0; i < courses.length; i++) {
        let course = courses[i]
        if (!queue.peak()) {
            queue.push(course[0])
        } else {
            if (queue.total + course[0] <= course[1]) {
                queue.push(course[0])
            } else if (queue.peak()! > course[0]) {
                queue.pop()
                queue.push(course[0])
            }
        }
    }
    return queue.size
};

class Queue {
    size: number
    total: number
    list: number[]

    constructor() {
        this.size = 0
        this.total = 0
        this.list = []
    }

    push (num: number) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i] > num) {
                this.list.splice(i, 0, num)
                break
            }
        }
        if (this.size === this.list.length) {
            this.list.push(num)
        }
        this.total += num
        this.size++
    }

    pop (): number | undefined {
        const res = this.list.pop()
        if (res) {
            this.total -= res
        }
        this.size--
        return res
    }

    peak (): number | undefined {
        return this.list[this.size - 1]
    }
}
// test
const courses = [[100, 200], [200, 1300], [1000, 1250], [2000, 3200]]
const result = scheduleCourse(courses)
console.log(result)