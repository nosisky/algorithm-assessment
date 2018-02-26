const reducedString = (str) => {
  str = str.split('');
  let result = [];

  str.map((s, i) => {
    if (result.length && result[result.length - 1] === s) {
      result.pop();
    } else {
      result.push(s);
    }
  });
  return result.length === 0 ? 'Empty string' : result.join('');
};

reducedString('aaabccddd');
