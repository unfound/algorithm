function sortArrayByParity(nums: number[]): number[] {
    const res: number[] = []
    let left = 0
    let right = nums.length - 1
    nums.forEach(num => {
        if (num % 2 === 0) {
            res[left++] = num
        } else {
            res[right--] = num
        }
    })
    return res
};

console.log(sortArrayByParity([3,1,2,4]))
