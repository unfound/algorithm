function maxIncreaseKeepingSkyline(grid: number[][]): number {
    const row:number[] = []
    const column:number[] = new Array(grid[0].length).fill(0)
    for (let i = 0; i < grid.length; i++) {
        let rowMax = 0
        for (let j = 0; j < grid[i].length; j++) {
            rowMax = Math.max(rowMax, grid[i][j])
            column[j] = Math.max(column[j], grid[i][j])
        }
        row.push(rowMax)
    }
    let total = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            total += Math.min(row[i], column[j]) - grid[i][j]
        }
    }
    return total
};

// test
const grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
const result = maxIncreaseKeepingSkyline(grid)
console.log(result)