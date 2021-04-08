function search(nums: number[], target: number): boolean {
  let start = 0
  let end = nums.length - 1

  while (start <= end) {
      let mid = Math.floor((start + end) / 2)
      if (nums[mid] === target) return true
      if (nums[start] === nums[mid] && nums[mid] === nums[end]) {
          start++
          end--
      } else if (nums[start] <= nums[mid]) {
          if (target < nums[mid] && target >= nums[start]) {
              end = mid - 1
          } else {
              start = mid + 1
          }
      } else {
          if (target > nums[mid] && target <= nums[end]) {
              start = mid + 1
          } else {
              end = mid - 1
          }
      }
  }

  return false
};
