const intersectionLists = (array1, array2) => {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < array1.length && j < array2.length) {
    //array 1 has to have an end that is greater than or equal to array2s start for the possibility of an overlap and its start has to be less than or equal to array2s end for an actual overlap
    let aoverlapsb =
      array1[i][1] >= array2[j][0] && array1[i][0] <= array2[j][1];
    //if array1 does overlap array2, we find the intersection.
    if (aoverlapsb) {
      let start = Math.max(array1[i][0], array2[j][0]);
      let end = Math.min(array1[i][1], array2[j][1]);
      result.push([start, end]);
    }
    //now we check to see, if array1 end is less than array2 end, we move i up because the next interval might be from array 1 to array2 end meaning there will be some overlap that we have to check for.
    if (array1[i][1] < array2[j][1]) {
      i++;
    } else {
      j++;
    }
  }
  return result;
};

console.log(
  intersectionLists(
    [
      [1, 3],
      [5, 7],
      [9, 12],
    ],
    [[5, 10]]
  )
);
