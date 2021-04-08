function search(nums: number[], target: number): number {
  function binarySearch (nums: number[], target: number, start: number, end: number): number {
      if (start > end) return -1

      let mid = Math.floor((start + end) / 2)
      if (nums[mid] === target) return mid
      if (nums[start] <= nums[mid]) {
          if (target < nums[mid] && target >= nums[start]) {
              return binarySearch(nums, target, start, mid - 1)
          } else {
              return binarySearch(nums, target, mid + 1, end)
          }
      } else {
          if (target > nums[mid] && target <= nums[end]) {
              return binarySearch(nums, target, mid + 1, end)
          } else {
              return binarySearch(nums, target, start, mid - 1)
          }
      }
  }

  return binarySearch(nums, target, 0, nums.length - 1)
};
