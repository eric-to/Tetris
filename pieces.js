const createPiece = (letter) => {
  if (letter === 'I') {
    return [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0]
    ];
  } else if (type === 'O') {
    return [
      [2, 2],
      [2, 2]
    ];
  } else if (type === 'T') {
    return [
      [0, 3, 0],
      [3, 3, 3],
      [0, 0, 0]
    ];
  } else if (type === 'S') {
    return [
      [0, 6, 6],
    ];
  }
};