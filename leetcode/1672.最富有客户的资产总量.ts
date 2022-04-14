export {}

function maximumWealth(accounts: number[][]): number {
    let max = 0
    for (let i = 0; i < accounts.length; i++) {
        let currentWealth = 0
        for (let j = 0; j < accounts[i].length; j++) {
            currentWealth += accounts[i][j]
        }
        max = Math.max(max, currentWealth)
    }
    return max
};