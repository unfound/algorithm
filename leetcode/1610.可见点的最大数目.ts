export {}

function visiblePoints(points: number[][], angle: number, location: number[]): number {
    let overPoints = 0
    let angleList: number[] = []
    const PI = Math.PI
    points.forEach(point => {
        if (point[0] === location[0] && point[1] === location[1]) {
            overPoints++
            return
        }
        // -PI ~ PI
        const radius = Math.atan2(location[0] - point[0], location[1] - point[1])
        angleList.push(radius + PI)
    })
    angleList.sort((a, b) => a - b)
    const len = angleList.length
    for (let i = 0; i < len; i++) {
        angleList.push(angleList[i] + 2 * PI)
    }
    let maxNum = 0
    const radius = angle * PI / 180

    for (let start = 0, end = 0; end < angleList.length; start++) {
        while (angleList[end] - angleList[start] <= radius) {
            end++
        }
        maxNum = Math.max(maxNum, end - start)
    }
    return maxNum + overPoints
}

let points = [[2,1],[2,2],[3,3]], angle = 90, location = [1,1]
const res = visiblePoints(points, angle, location)
console.log(res)