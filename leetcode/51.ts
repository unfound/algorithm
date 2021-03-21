function solveNQueens(n: number): string[][] {
  var res = []

  var board = []
  for (let i = 0; i < n; i++) {
    var line = []
    for (let j = 0; j < n; j++) {
      line.push('.')
    }
    board.push(line)
  }

  let QNumber = 0
  findPositionForQ(board, 0, QNumber)
  return res.map(board => {
    return board.map(line => {
      let lineStr = line.join('')
      lineStr = lineStr.replaceAll('x', '.')
      return lineStr
    })
  })

  function findPositionForQ (board: string[][], row: number, QNumber: number) {
    if (row >= n) {
      if (QNumber === n) res.push(board)
      return
    }
    for (let col = 0; col < n; col++) {
      if (board[row][col] === '.') {
        let boardCopy = JSON.parse(JSON.stringify(board))
        boardDisabledAfterQ(boardCopy, row, col)
        findPositionForQ(boardCopy, row + 1, QNumber + 1)
      }
    }
  }

  function boardDisabledAfterQ (board: string[][], row: number, col: number) {
    for (var i = 0; i < n; i++) {
      board[row][i] = 'x'
      board[i][col] = 'x'
    }
    for (var i = row + 1, j = 1; i < n; i++, j++) {
      if (col + j < n) {
        board[i][col + j] = 'x'
      }
      if (col - j >= 0) {
        board[i][col - j] = 'x'
      }
    }
    board[row][col] = 'Q'
  }

};

function solveNQueens2(n: number): string[][] {
  var res = []

  var board = []
  for (let i = 0; i < n; i++) {
    var line = []
    for (let j = 0; j < n; j++) {
      line.push('.')
    }
    board.push(line)
  }

  let QNumber = 0
  let QPositons: number[][] = []
  findPositionForQ(board, 0, QNumber, QPositons)
  return res.map(board => {
    return board.map(line => {
      let lineStr = line.join('')
      return lineStr
    })
  })

  function findPositionForQ (board: string[][], row: number, QNumber: number, QPositons: number[][]) {
    if (row >= n) {
      if (QNumber === n) res.push(board)
      return
    }
    for (let col = 0; col < n; col++) {
      if (QCanBeHere(QPositons, row, col)) {
        let boardCopy = JSON.parse(JSON.stringify(board))
        let QPositonsCopy = JSON.parse(JSON.stringify(QPositons))
        boardCopy[row][col] = 'Q'
        QPositonsCopy.push([row, col])
        findPositionForQ(boardCopy, row + 1, QNumber + 1, QPositonsCopy)
      }
    }
  }

  function QCanBeHere (QPositons: number[][], row: number, col: number) {
    let flag = true
    for (let i = 0; i < QPositons.length; i++) {
      if (QPositons[i][0] === row) {
        flag = false
        break
      }
      if (QPositons[i][1] === col) {
        flag = false
        break
      }
      let notRow = QPositons[i][0] + Math.abs(col - QPositons[i][1])
      let notLeftCol = QPositons[i][1] - (row - QPositons[i][0])
      let notRightCol = QPositons[i][1] + (row - QPositons[i][0])
      if (row === notRow && (col === notLeftCol || col === notRightCol)) {
        flag = false
        break
      }
    }

    return flag
  }

};

