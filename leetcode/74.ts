/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
  return binarySearch(matrix, target, 0, matrix.length - 1)

  function binarySearch (arr: number[][] | number[], target: number, start: number, end: number) {
      if (start > end) return false

      let bool = false
      let mid = Math.floor((start + end) / 2)
      if (typeof arr[mid] === 'number') {
          if (target === arr[mid]) {
              return true
          } else if (target < arr[mid]) {
              bool = binarySearch(arr, target, start, mid - 1) || bool
          } else {
              bool = binarySearch(arr, target, mid + 1, end) || bool
          }
      } else {
          let length = (arr[mid] as number[]).length
          if (target === arr[mid][length - 1]) {
              return true
          } else if (target < arr[mid][length - 1]) {
              if (target >= arr[mid][0]) {
                  bool = binarySearch((arr[mid] as number[]), target, 0, length - 1) || bool
              } else {
                  bool = binarySearch(arr, target, start, mid - 1) || bool
              }
          } else {
              bool = binarySearch(arr, target, mid + 1, end) || bool
          }
      }

      return bool
  }
};
