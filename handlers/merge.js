const merge = (left, right) => {
  const merged = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      merged.push(left.shift());
    } else {
      merged.push(right.shift());
    }
  }

  return [...merged, ...left, ...right];
};

const mergeSort = (data) => {
  if (data.length < 2) {
    return data;
  }

  const middle = Math.floor(data.length / 2);
  const [left, right] = [data.slice(0, middle), data.slice(middle)];
  return merge(mergeSort(left), mergeSort(right));
};

module.exports = (data) => {
  const arr = [...data];
  return mergeSort(arr);
};
