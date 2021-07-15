const swap = (array, index1, index2) => {
  let value1 = array[index1];
  array[index1] = array[index2];
  array[index2] = value1;
};

const findCorruptPair = (array) => {
  let i = 0;
  while (i < array.length) {
    let value = array[i];
    if (array[value - 1] !== value) {
      swap(array, value - 1, i);
    } else {
      i++;
    }
  }

  const results = [];
  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    if (i !== value - 1) {
      results.push(value);
      results.push(i + 1);
    }
  }
  return results;
};

console.log(findCorruptPair([3, 1, 2, 5, 2]));
