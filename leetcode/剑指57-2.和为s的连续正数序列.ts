export {}

function findContinuousSequence(target: number): number[][] {
    if (target < 3) return [];
    let start = 1
    let end = 2
    let total = 3
    let result: number[][] = []
    let item: number[] = [start, end]
    while (start < end && end < target) {
        if (total < target) {
            total += ++end
            item.push(end)
        } else if (total > target) {
            total -= start++
            item.shift()
        } else {
            result.push(item.concat())
            total += ++end
            item.push(end)
            total -= start++
            item.shift()
        }
    }

    return result
};

console.log(findContinuousSequence(9))
console.log(findContinuousSequence(15))
