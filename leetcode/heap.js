/**703. 数据流中的第 K 大元素
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  var initArr = new Array(k)
  for (var i = 0; i < k; i++) {
    initArr[i] = 0
  }
  this.minHeap = new MinHeap(initArr)
  for (var val of nums) {
    this.add(val)
  }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  if (this.minHeap.peak() < val) {
    this.minHeap.heap[0] = val
    this.minHeap.create(this.minHeap.heap)
  }
  return this.minHeap.peak()
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

function MinHeap (arr) {
  this.heap = this.create(arr)
}

MinHeap.prototype.create = function (arr) {
  for (var i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    this.buildChildNodes(arr, i)
  }
  return arr
}

MinHeap.prototype.buildChildNodes = function (arr, index) {
  let left = index * 2 + 1
  let right = index * 2 + 2
  let maxIndex = index
  let length = arr.length

  if (left < length && arr[left] < arr[maxIndex]) {
    maxIndex = left
  }

  if (right < length && arr[right] < arr[maxIndex]) {
    maxIndex = right
  }

  if (maxIndex != index) {
    this.swap(arr, index, maxIndex)
    this.buildChildNodes(arr, maxIndex)
  }
}

MinHeap.prototype.swap = function (arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}

MinHeap.prototype.peak = function () {
  return this.heap[0]
}

/**
 * 
 * @param {*} arr 
 */
function MaxHeap (arr) {
  this.heap = this.create(arr)
}

MaxHeap.prototype.create = function (arr) {
  for (var i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    this.buildChildNodes(arr, i)
  }
  return arr
}

MaxHeap.prototype.buildChildNodes = function (arr, index) {
  let left = index * 2 + 1
  let right = index * 2 + 2
  let maxIndex = index
  let length = arr.length

  if (left < length && arr[left] > arr[maxIndex]) {
    maxIndex = left
  }

  if (right < length && arr[right] > arr[maxIndex]) {
    maxIndex = right
  }

  if (maxIndex != index) {
    this.swap(arr, index, maxIndex)
    this.buildChildNodes(arr, maxIndex)
  }
}

MaxHeap.prototype.swap = function (arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}

MaxHeap.prototype.peak = function () {
  return this.heap[0]
}

MaxHeap.prototype.push = function (number) {
  this.heap.push(number)
  this.create(this.heap)
}

MaxHeap.prototype.pop = function () {
  var val = this.heap[0]
  this.heap[0] = this.heap.pop()
  this.create(this.heap)
  return val
}

MaxHeap.prototype.sort = function () {
  var res = []
  var length = this.heap.length
  for (var i = 0; i < length; i++) {
    res.push(this.pop())
  }
  this.heap = res
  return res
}
