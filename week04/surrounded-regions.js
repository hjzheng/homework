/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  let rows = board.length
  if (rows === 0) return
  let cols = board[0].length

  let dx = [0, 0, 1, -1],
    dy = [1, -1, 0, 0]

  // 从边缘且是 O 的开始搜索，将 O 则替换成 #
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (
        (i === 0 || j === 0 || i === rows - 1 || j === cols - 1) &&
        board[i][j] === 'O'
      ) {
        bfs(i, j, board, '#')
      }
    }
  }

  function bfs(i, j, board, marked) {
    const q = [{ x: i, y: j }]
    board[i][j] = marked

    while (q.length) {
      let { x, y } = q.shift()

      for (let k = 0; k < 4; k++) {
        let nX = x + dx[k]
        let nY = y + dy[k]

        if (nX < 0 || nX >= rows || nY < 0 || nY >= cols) {
          continue
        }

        if (board[nX][nY] !== 'O') continue

        board[nX][nY] = marked
        q.push({ x: nX, y: nY })
      }
    }
  }

  // 将内部的为 O 的孤立的格子，替换成 X
  for (let i = 1; i < rows - 1; i++) {
    for (let j = 1; j < cols - 1; j++) {
      if (board[i][j] === 'O') bfs(i, j, board, 'X')
    }
  }

  // 将 # 恢复为 O
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === '#') board[i][j] = 'O'
    }
  }
}
