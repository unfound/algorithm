export function quickSort (arr: number[]): number[] {
    if (arr.length <= 1) return arr
    const midIndex = Math.floor(arr.length / 2)
    const mid = arr[midIndex]
    const leftArr: number[] = []
    const midArr: number [] = []
    const rightArr: number[] = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < mid) {
            leftArr.push(arr[i])
        } else if (arr[i] === mid) {
            midArr.push(arr[i])
        } else {
            rightArr.push(arr[i])
        }
    }

    return quickSort(leftArr).concat(midArr).concat(quickSort(rightArr))
}
// 利用双指针来进行交换位置，则无需额外的数组
export function quickSortByPoint (arr: number[]): number[] {
    function sortByPoint (arr: number[], begin: number, end: number) {
        if (begin < end) {
            const midIndex = begin
            const mid = arr[midIndex]
            let i = begin
            let j = end
            while (i < j) {
                while (i < j && arr[j] > mid) {
                    j--
                }
                if (i < j) {
                    arr[i++] = arr[j] // 将j位置的值赋值给i，相当于j的位置变成空的
                }
                while (i < j && arr[i] < mid) {
                    i++
                }
                if (i < j) {
                    arr[j--] = arr[i] // 将i位置的值赋值给j，相当于i的位置变成空的
                }
            }
            arr[i] = mid // 最后i===j, 把空位补上
            sortByPoint(arr, begin, i - 1)
            sortByPoint(arr, i + 1, end)
        }
    }
    sortByPoint(arr, 0, arr.length - 1)
    return arr
}
console.time('quickSort')
console.log(quickSort([6,1,8,3,4,9,5,4,9,10,7,2,9,21,5,6,85,5,13,5,43,14515,1456,2,543,51,31,355463,21,54,351,5,3,1,5,5,51,5]))
console.log(quickSort([6,1,8,4,7,2]))
console.timeEnd('quickSort')

console.time('quickSortByPoint')
console.log(quickSortByPoint([6,1,8,3,4,9,5,4,9,10,7,2,9,21,5,6,85,5,13,5,43,14515,1456,2,543,51,31,355463,21,54,351,5,3,1,5,5,51,5]))
console.log(quickSortByPoint([6,1,8,4,7,2]))
console.timeEnd('quickSortByPoint')