function numRabbits(answers: number[]): number {
  if (answers.length <= 0) return 0
  if (answers.length === 1) return answers[0] + 1

  let map: Map<number, number> = new Map()
  answers.forEach(item => {
    let key = item + 1
    let num = map.get(key)
    if (!num) map.set(key, 1)
    else map.set(key, num + 1)
  })

  let total: number = 0
  map.forEach((val, key) => {
    if (key >= val) total += key
    else total += Math.ceil(val / key) * key
  })

  return total
};
