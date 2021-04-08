function findMin(nums: number[]): number {
  if (nums.length <= 1) return nums[0]
  let start = 0
  let end = nums.length - 1
  if (nums[start] < nums[end]) return nums[start]

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)

    let left = mid - 1
    let right = mid + 1

    if (left < 0) left = nums.length - 1
    if (right > nums.length - 1) right = 0
    if (nums[left] < nums[mid] && nums[mid] > nums[right]) {
      return nums[right]
    } else if (nums[left] > nums[mid] && nums[mid] < nums[right]) {
      return nums[mid]
    }

    if (nums[start] < nums[mid]) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
};

function findMin2(nums: number[]): number {
  if (nums.length <= 1) return nums[0]
  let start = 0
  let end = nums.length - 1
  if (nums[start] < nums[end]) return nums[start]

  while (start < end) {
    let mid = Math.floor((start + end) / 2)
    // 用end比较边界更清晰点
    // 用start比较边界要注意，因为mid是向下取整，所以可能会num[start] === num[mid]
    if (nums[end] < nums[mid]) {
      start = mid + 1
    } else {
      end = mid
    }
  }

  return nums[start]
};