function containsNearbyDuplicateOld(nums: number[], k: number): boolean {
    if (nums.length < 2) return false
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j <= i + k && j < nums.length; j++) {
            if (nums[i] === nums[j]) return true
        }
    }
    return false
}

function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const window = new Set()
    for (let i = 0; i < nums.length; i++) {
        if (i > k) window.delete(nums[i - k - 1])
        if (window.has(nums[i])) return true
        window.add(nums[i])
    }
    return false
}
// Test
console.log(containsNearbyDuplicate([1,2,3,1], 3))
console.log(containsNearbyDuplicate([1,0,1,1], 1))
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))
