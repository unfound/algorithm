// 超时
function numFriendRequestsFault(ages: number[]): number {
    if (ages.length <= 1) {
        return 0
    }
    let msgNum = 0
    for (let i = 0; i <ages.length - 1; i++) {
        for (let j = i + 1; j <ages.length; j++) {
            if (canBeFriend(ages, i, j)) {
                msgNum++
            }
            if (canBeFriend(ages, j, i)) {
                msgNum++
            }
        }
    }
    return msgNum
    function canBeFriend (ages: number[], x: number, y: number): boolean {
        if (
            ages[y] <= 0.5 * ages[x] + 7
            || ages[y] > ages[x]
            || (ages[y] > 100 && ages[x] < 100)
        ) {
            return false
        }
        return true
    }
};

function numFriendRequests(ages: number[]): number {
    if (ages.length <= 1) {
        return 0
    }
    ages.sort((a, b) => a - b)
    let msgNum = 0
    for (let i = 0, start = 0, end = 0; i < ages.length; i++) {
        while (start < i && !canBeFriend(ages, start, i)) {
            start++
        }
        if (end < start) {
            end = start
        }
        while (end < ages.length && canBeFriend(ages, end, i)) {
            end++
        }
        if (end > start) {
            msgNum += end - start - 1
        }
    }
    return msgNum
    function canBeFriend (ages: number[], x: number, y: number): boolean {
        if (
            ages[y] <= 0.5 * ages[x] + 7
            || ages[y] > ages[x]
            || (ages[y] > 100 && ages[x] < 100)
        ) {
            return false
        }
        return true
    }
};

console.log(numFriendRequests([16, 16]))
console.log(numFriendRequests([16, 17, 18]))
console.log(numFriendRequests([20,30,100,110,120]))