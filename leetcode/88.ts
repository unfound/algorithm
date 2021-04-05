/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  if (n > 0 && m < nums1.length) {
    for (let i = n - 1, j = m - 1; i >=0 || j >= 0;) {
      while (j < 0 && i >= 0) {
        nums1[i + j + 1] = nums2[i]
        i--
      }
      if (i < 0) break
      if (nums2[i] >= nums1[j]) {
        nums1[i + j + 1] = nums2[i]
        i--
      } else if (nums2[i] < nums1[j]) {
        nums1[i + j + 1] = nums1[j]
        j--
      }
    }
  }
};
