function findUnsortedSubarray(nums: number[]): number {
    if (nums.length <= 1) return 0

    const length = nums.length
    let left = -1
    let right = length
    let max = -Infinity
    let min = Infinity
    for (let i = 0; i < length; i++) {
        if (nums[i] >= max) {
            max = nums[i]
        } else {
            left = i
        }

        if (nums[length - i - 1] <= min) {
            min = nums[length - i - 1]
        } else {
            right = length - i - 1
        }
    }

    return right >= left ? 0 : left - right + 1
}