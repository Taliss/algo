const partition = (arr, start, end) => {
  const pivot = arr[start];
  let leftWallIndex = start + 1;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      [arr[i], arr[leftWallIndex]] = [arr[leftWallIndex], arr[i]];
      leftWallIndex++;
    }
  }

  [arr[start], arr[leftWallIndex - 1]] = [arr[leftWallIndex - 1], arr[start]];

  return leftWallIndex - 1;
};

const quickSort = (arr, start, end) => {
  if (start < end) {
    const piIndex = partition(arr, start, end);
    quickSort(arr, start, piIndex - 1);
    quickSort(arr, piIndex + 1, end);
  }
};

module.exports = (data) => {
  const arr = [...data];
  quickSort(arr, 0, arr.length);
  return arr;
};
