const diagonalDifference = (size, rows) => {
  let i;
  let primary = [];
  let secondary = [];

  const add = (a, b) => {
    return a + b;
  }

  for (i = 0; i < size; i++) {
    primary.push(rows[i][i]);
    secondary.push(rows[i][size - (i + 1)]);
  }
  const primarySum = primary.reduce(add, 0);
  const secondarySum = secondary.reduce(add, 0);

  return Math.abs(primarySum - secondarySum);
}

diagonalDifference(3, [[11, 2, 4], [4, 5, 6], [10, 8, -12]])
