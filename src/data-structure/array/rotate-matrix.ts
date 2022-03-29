function rotateSquareMatrix(matrix: number[][]): number[][] {
  if (!matrix.length || matrix.length !== matrix[0].length) {
    throw new Error("Input matrix is not a square matrix");
  }
  for(let i = 0; i < matrix.length; i++) {
    for(let j = i; j < matrix.length; j++) {
      if (i !== j) {
        const temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
      }
    }
  }
  return matrix;
}

console.log(rotateSquareMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]));
rotateSquareMatrix([]);
rotateSquareMatrix([[1],[1,2]]);