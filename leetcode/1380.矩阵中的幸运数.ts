export {}

function luckyNumbers (matrix: number[][]): number[] {
    const result: number[] = []
    for (let i = 0; i < matrix.length; i++) {
        let rowMin = Infinity
        let minIndex = 0
        for (let col = 0; col < matrix[i].length; col++) {
            if (rowMin > matrix[i][col]) {
                rowMin = matrix[i][col]
                minIndex = col
            }
        }
        let isMax = true
        for (let row = 0; row < matrix.length; row++) {
            if (matrix[i][minIndex] < matrix[row][minIndex]) {
                isMax = false
                break
            }
        }
        if (isMax) {
            result.push(matrix[i][minIndex])
        }
    }

    return result
};

console.log(luckyNumbers([[3,7,8],[9,11,13],[15,16,17]]))
console.log(luckyNumbers([[1,10,4,2],[9,3,8,7],[15,16,17,12]]))
console.log(luckyNumbers([[7,8],[1,2]]))