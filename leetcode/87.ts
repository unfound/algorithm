function isScramble(s1: string, s2: string): boolean {
  if (s1 === s2) return true
  if (!isSimiler(s1, s2)) return false

  let length = s1.length
  let memory = new Array(length).fill(0).map(() => new Array(length).fill(0).map(() => new Array(length + 1).fill(0)))

  return dfs(0, 0, length)
  function dfs (index1: number, index2: number, length: number): boolean {
    if (memory[index1][index2][length] !== 0) {
      return memory[index1][index2][length] === 1
    }

    let sub1 = s1.slice(index1, index1 + length)
    let sub2 = s2.slice(index2, index2 + length)
    if (sub1 === sub2) {
      memory[index1][index2][length] = 1
      return true
    }

    if (!isSimiler(sub1, sub2)) {
      memory[index1][index2][length] = -1
      return false
    }

    for (let i = 1; i < length; i++) {
      if (dfs(index1, index2, i) && dfs(index1 + i, index2 + i, length - i)) {
        memory[index1][index2][length] = 1
        return true
      }
      if (dfs(index1, index2 + length - i, i) && dfs(index1 + i, index2, length - i)) {
        memory[index1][index2][length] = 1
        return true
      }
    }

    memory[index1][index2][length] = -1
    return false
  }

  function isSimiler (s1: string, s2: string): boolean {
    if (s1.length !== s2.length) return false
    const charMap: Map<string, number> = new Map()
    for (let s of s1) {
      charMap.set(s, (charMap.get(s) || 0) + 1)
    }

    for (let s of s2) {
      charMap.set(s, (charMap.get(s) || 0) - 1)
    }

    for (let val of charMap.values()) {
      if (val !== 0) return false
    }

    return true
  }
};
