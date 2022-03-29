function isMatrix(matrix: number[][]): boolean {
  if (!matrix.length) {
    return false;
  }
  for (let i = 1; i < matrix.length; i++) {
    if (matrix[i].length !== matrix[0].length) {
      return false;
    }
  }
  return true;
}

function zeroMatrix(matrix: number[][]): number[][] {
  if (!isMatrix(matrix)) {
    throw new Error("Invalid matrix provided");
  }
  const rows = new Array<boolean>(matrix.length).fill(false);
  const columns = new Array<boolean>(matrix[0].length).fill(false);

  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = true;
        columns[j] = true;
      }
    }
  }

  // Nullify Rows
  for (let i = 0; i < rows.length; i++) {
    if (rows[i] === true) {
      matrix = nullifyRow(matrix, i);
    }
  }

  // Nullify Columns
  for (let i = 0; i < columns.length; i++) {
    if (columns[i] === true) {
      matrix = nullifyColumn(matrix, i);
    }
  }

  return matrix;
}

function nullifyRow(matrix: number[][], row: number): number[][] {
  for (let i = 0; i < matrix[0].length; i++) {
    matrix[row][i] = 0;
  }
  return matrix;
}

function nullifyColumn(matrix: number[][], column: number): number[][] {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][column] = 0;
  }
  return matrix;
}

console.log(zeroMatrix([[1, 0, 3, 4], [5, 6, 7, 0], [9, 10, 11, 12]]));