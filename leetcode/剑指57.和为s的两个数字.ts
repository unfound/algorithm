export {}

function twoSum(nums: number[], target: number): number[] {
    let result: number[] = [];
    const map = new Map<number, number>()
    for (let i = 0; i < nums.length; i++) {
        const targetIndex = map.get(target - nums[i])
        if (typeof targetIndex === 'number') {
            result = [nums[targetIndex], nums[i]]
            break
        }
        map.set(nums[i], i)
    }
    return result
};

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([10,26,30,31,47,60], 40))
