class Vector2D {
    angle: number
    length: number
    vector: number[]
    constructor (x1 = 0, y1 = 0, x2 = 0, y2 = 0) {
        this.length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
        this.angle = Math.atan((y2 - y1) / (x2 - x1))
        this.vector = [x2 - x1, y2 - y1]
    }
}