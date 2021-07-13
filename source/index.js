const swap = (array, index1, index2) => {
  const value1 = array[index1];
  array[index1] = array[index2];
  array[index2] = value1;
};
//first approach

const findAllDuplicates2 = (array) => {
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
    }
  }
  return results;
};

//second approach of using a pointer to store all the duplicates
const findAllDuplicates = (array) => {
  let d = 0;
  let i = 0;
  while (i < array.length) {
    let value = array[i];
    if (array[value - 1] !== value) {
      swap(array, value - 1, i);
    } else {
      if (value - 1 !== i) {
        array[d] = value;
        d++;
      }
      i++;
    }
  }
  return array.slice(0, d);
};

console.log(findAllDuplicates2([5, 4, 7, 2, 3, 5, 3, 3, 3, 3]));
