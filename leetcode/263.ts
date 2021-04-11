function isUgly(n: number): boolean {
  if (n <= 0 ) return false
  if (n === 1 || n === 2 || n === 3 || n === 5) return true

  let bool = true
  if (n % 2 === 0) {
      bool = isUgly(n / 2)
  } else if (n % 3 === 0) {
      bool = isUgly(n / 3)
  } else if (n % 5 === 0) {
      bool = isUgly(n / 5)
  } else {
      bool = false
  }

  return bool
};

function isUgly2(n: number): boolean {
  if (n <= 0 ) return false
  if (n === 1 || n === 2 || n === 3 || n === 5) return true

  let bool = true
  if (n % 2 === 0) {
      bool = isUgly(n / 2)
  } else if (n % 3 === 0) {
      bool = isUgly(n / 3)
  } else if (n % 5 === 0) {
      bool = isUgly(n / 5)
  } else {
      bool = false
  }

  return bool
};