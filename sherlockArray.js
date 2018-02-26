const checkSherlock = (arr) => {
  function isSherlock(elem, i, arr) {
    function sum(i, n) {
      return i < n ? arr[i] + sum(i + 1, n) : 0;
    }
    return sum(0, i) === sum(i + 1, arr.length);
  }

  return arr.some(isSherlock)

}

checkSherlock([1, 2, 3])

