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

    // The whole purpose, is to make sure the current value at the index we're on, is in its correct index, if not already. So, looking at the value of our current index, which is equal to the variable,value, we check to see if the index that should contain this value actually does contain it. If it does great, this value is in its correct index, so we move on to see if the value at the next index is in its correct index. If it isn't, we swap the index that should contain this value with our current index, so that the index that should contain this value ends up containing it. And then we want to check if the new number at our current index is in its correct index, and repeat this process.
    // When it is all said and done, each value in our array will be held in its correct index. AND EVEN if we have duplicate numbers in our range from 1 to n , one instance of the duplicate will always be in its correct index, while the rest are in completely different indices, but it won't matter beause the fact that one instance of the duplicate is in its correct index means after we have done this sorting process where we make sure to get one instance of a value is in its correct index and we iterate through our array, every index that doesn't contain its correct value, means the value is a duplicate. OR, lets say there are no duplicates,but we have a missing number. We will make sure each value is in its correct index,(if the index  exists in our array). If the index doesn't exist, we skip trying to get this value in its correct index. Then when the process is done, we iterate through our array, and since each index except one has its correct value, the index that doesn't have its correct value has the missing number.
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
