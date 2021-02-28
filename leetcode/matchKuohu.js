/**20. 有效的括号
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var strArr = s.split('')
  var stack = new Array()
  var leftArr = ['(', '[', '{']
  var rightArr = [')', ']', '}']
  for (var i = 0; i < strArr.length; i++) {
    var str = strArr[i]
    if (leftArr.includes(str)) {
      stack.push(str)
    } else {
      var index = rightArr.indexOf(str)
      var lastStr = stack.pop()
      if (lastStr !== leftArr[index]) {
        stack.push(str)
        break
      }
    }
  }

  return stack.length === 0
};

var isValid2 = function(s) {
  if (s.length % 2 === 1) return false
  var strArr = s.split('')
  var stack = new Array()
  var map = new Map([
    [')', '('],
    [']', '['],
    ['}', '{']
  ])
  for (var i = 0; i < strArr.length; i++) {
    var str = strArr[i]
    if (map.has(str)) {
      if (!stack.length || map.get(str) !== stack[stack.length - 1]) {
        return false
      }
      stack.pop()
    } else {
      stack.push(str)
    }
  }

  return stack.length === 0
};
