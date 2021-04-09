function findMin(nums: number[]): number {
  if (nums.length <= 1) return nums[0]

  let start = 0
  let end = nums.length - 1

  while (start < end) {
    let mid = Math.floor((start + end) / 2)

    if (nums[start] === nums[mid] && nums[mid] === nums[end]) {
      start++
      end--
    } else if (nums[end] > nums[mid] || nums[start] > nums[mid] || nums[start] < nums[end]) {
      end = mid
    } else {
      start = mid + 1
    }
  }

  return nums[start]
};