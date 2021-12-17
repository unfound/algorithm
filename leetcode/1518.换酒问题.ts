function numWaterBottles(numBottles: number, numExchange: number): number {
    let total = numBottles
    let exNum = 0
    while (numBottles >= numExchange) {
        exNum = Math.floor(numBottles / numExchange)
        numBottles = (numBottles - exNum * numExchange) + exNum
        total += exNum
    }
    return total
}

console.log(numWaterBottles(9, 3))
console.log(numWaterBottles(15, 4))
console.log(numWaterBottles(5, 5))
console.log(numWaterBottles(2, 3))

