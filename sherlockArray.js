const checkSherlock = (arr) => {
  function isSherlock(elem, index, arr) {
    function sum(index, n) {
      return index < n ? arr[index] + sum(index + 1, n) : 0;
    }
    return sum(0, index) === sum(index + 1, arr.length);
  }

  return arr.some(isSherlock) ? 'YES' : 'NO';
}

checkSherlock([1, 2, 3, 3])
