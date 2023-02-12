const binarySearch = (seekElement, start = 0, end, sortedArr) => {
  end ??= sortedArr.length - 1;

  if (start > end) return -1;

  const mid = Math.floor((start + end) / 2);

  //equal == found
  if (sortedArr[mid] === seekElement) {
    return mid;
  }

  // go left
  if (sortedArr[mid] > seekElement) {
    return binarySearch(seekElement, 0, mid - 1, sortedArr);
  }

  // go right
  if (sortedArr[mid] < seekElement) {
    return binarySearch(seekElement, mid + 1, end, sortedArr);
  }
};

module.exports = binarySearch;
