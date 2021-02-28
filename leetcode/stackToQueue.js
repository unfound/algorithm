// 232. 用栈实现队列
/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.input = new Array()
  this.output = new Array()
  this.size = 0
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.input.push(x)
  this.size++
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (this.output.length === 0) {
    var value
    while (value = this.input.pop()) {
      this.output.push(value)
    }
  }
  this.size--
  return this.output.pop()
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if (this.output.length === 0) {
    var value
    while (value = this.input.pop()) {
      this.output.push(value)
    }
  }
  return this.output[this.output.length - 1]
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.size === 0
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */