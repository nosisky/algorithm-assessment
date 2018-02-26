const minMax = (nums) => {
  let main = [...nums]
  const add = (a, b) => {
    return a + b;
  }

  const removeElement = (index) => {
    let sub = [...main];
    sub.splice(index, 1);
    return sub;
  };
  const result = nums.map((elem, index) => {
    const remover = removeElement(index);
    return remover.reduce(add, 0);
  });

  return `${Math.min(...result)} ${Math.max(...result)}`;

};

minMax([1, 2, 3, 4, 5])
