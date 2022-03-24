function imageSmoother(img: number[][]): number[][] {
    const res:number[][] = []
    // 之前用fill([])填充数组，填充的数组是同一个引用，所以答案错误
    for (let i = 0; i < img.length; i++) {
        res[i] = []
        for (let j = 0; j < img[i].length; j++) {
            let count = 0
            let total = 0
            for (let ii = -1; ii < 2; ii++) {
                for (let jj = -1; jj < 2; jj++) {
                    const x = i + ii
                    const y = j + jj
                    if (x >= 0 && x < img.length && img[x][y] != undefined) {
                        count++
                        total += img[x][y]
                    }
                }
            }
            res[i][j] = Math.floor(total / count)
        }
    }

    return res
};

console.log(imageSmoother([[1,1,1],[1,0,1],[1,1,1]]))
console.log(imageSmoother([[100,200,100],[200,50,200],[100,200,100]]))
