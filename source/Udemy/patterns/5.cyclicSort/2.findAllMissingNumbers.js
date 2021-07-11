const swap = (array, index1, index2) => {
  const value1 = array[index1];
  array[index1] = array[index2];
  array[index2] = value1;
};

const findMissingNumbers = (array) => {
  const seen = {};
  let i = 0;
  while (i < array.length) {
    const value = array[i];
    if (seen[value] === true) {
      i++;
      continue;
    }

    // so, looking at the value of our current index,which is equal to the variable,value, we check if the index that should contain this value actually does contain it.So, if the index in question is the index we're on, and it does contain this value, great, we move on.This index has the right value. If it doesn't we swap the index that should contain this value with our current index, so that the index that should contain this value ends up containing it.
    if (array[value - 1] !== value) {
      swap(array, value - 1, i);
    } else {
      seen[array[i]] = true;
      i++;
    }
  }

  const results = [];

  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    if (i !== value - 1) {
      results.push(i + 1);
    }
  }
  return results;
};

console.log(findMissingNumbers([2, 3, 2, 1]));
