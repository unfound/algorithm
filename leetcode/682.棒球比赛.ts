const ADD = '+'
const DOUBLE = 'D'
const CANCLE = 'C'
function calPoints(ops: string[]): number {
  const store: number[] = []
  ops.forEach(item => {
    const lastIndex = store.length - 1
    switch (item) {
      case ADD: store.push(store[lastIndex] + store[lastIndex - 1]);break;
      case DOUBLE: store.push(2 * store[lastIndex]);break;
      case CANCLE: store.pop();break;
      default: store.push(+item)
    }
  })
  return store.reduce((prev, curr) => prev + curr, 0)
}

console.log(calPoints(["5","2","C","D","+"]))
console.log(calPoints(["5","-2","4","C","D","9","+","+"]))
console.log(calPoints(["1"]))