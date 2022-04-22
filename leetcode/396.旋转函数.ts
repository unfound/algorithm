export {}
// 找规律，或者用dp的思路好像也OK
// 当 1≤k<n 时，F(k)=F(k−1)+numSum−n×nums[n−k]

function maxRotateFunction(nums: number[]): number {
    const n = nums.length
    const total = nums.reduce((prev, cur) => prev + cur, 0)
    const f0 = nums.reduce((prev, cur, curId) => prev + cur * curId, 0)
    let fk = f0
    let res: number = f0
    for (let k = 1; k < n; k++) {
        fk = fk + total - n * nums[n - k]
        res = Math.max(res, fk)
    }
    return res
};

console.log(maxRotateFunction([4,3,2,6]))
console.log(maxRotateFunction([10]))
console.log(maxRotateFunction([1, 2]))
