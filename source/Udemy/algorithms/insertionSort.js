//with insertionSort, we look at each number, so i is every  number in our array. And for each number, i, j looks at every number before it and if it is greater than the value of i, we swap with i. Once we swap with i, the new index changes to what j was. Since we are sorting as we go, if the current index value is greater than the one before it, we can break out of our j loop of comparing to every number before it(because the left is being sorted as we go) and proceed with our i loop of looking at the next number.

const swap = (array, index1, index2) => {
  const value1 = array[index1];
  array[index1] = array[index2];
  array[index2] = value1;
};

//best way
const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let index = i;
    for (let j = i - 1; j >= 0; j--) {
      if (array[index] < array[j]) {
        swap(array, index, j);
        index = j;
      } else {
        break;
      }
    }
  }
  return array;
};

//if its almost sorted, since we break out of the inner loop if current value is where its supposed to be, big o in best case is o(n) because we are essentially just doing one comparison in inner loop per the number in outer loop. An if statement is 0(1). and since we are  breaking out of that inner loop  if else is true, we avoid having to do if statement for every other item in that inner loop(which is what would make it 0(n2)).

//best case scenario is outer for loop runs o(n) times,because it runs for every item in our array and inner for loop runs once o(1) each time for each outer loop number so, we have o(n*1) which just simplifies to o(n)so for each n, run code once. as opposed to running n times for each item in our outer loop, which would result in 0(n*n) for each n run the code n times again. then we would have o(n^2)
console.log(insertionSort([0, 4, 3, 6, 8, 0.4, 9, 11]));
