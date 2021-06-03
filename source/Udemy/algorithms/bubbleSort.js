//with bubbleSort, with each iteration, we are moving the largest number to the top/end of our array.And the number of iterations,i, depends on the number of items in our array that need to be rearranged. So, if 8 items in our array, 8 items need to be rearranged, so 8 total iterations,so i starts at 8 and goes down to 1. Not 0, because that is 9 iterations. And for each iteration, the j loop looks at every value,bringing the largest value to the top each time,via swapping.

//for each iteration of i, the j loop sorts the largest number to the top. So for every subsequent iteration of i, the j loop doesnt have to compare with the latest number it just sorted to the top.So, if an array has 5 items, with the first iteration of i=5, for every number, j swaps with the number right after it and stops running after the third index. because the third index swaps witht the fourth index, making the fourth index correctly sorted. For the second iteration of i=4, we are trying to sort the third index. So for every number, j swaps with the number right after it and stops running after the second index, because the second index is compared with the third index, making the third index correctly sorted. For the third iteration of=3, we are trying to sort the second index.. So for every number, j swaps with the number right after it and stops after the first index, because the first index is compared with the second index, making the second index correctly sorted. for the fourth iteration of i=2, we need to sort the first index. So j runs for every number and swaps with number right after it and stops at the 0 index, because the 0 index is compared with 1 index, making the 1 index correctly sorted.

//if we have an array of 5 items
//when i is 5, we want to sort the fourth index, so j end at 3rd index,
///when i is 4, we want to sort the third index, so j ends at second index,
//when i is is 3, we want to sort the second index, so j ends at first index,
//when i is 2, we want to sort the first index, so j ends at zero index,
//when i is 1, we want to sort the zero index(but it is already sorted),so j ends at -1

//Optimzation:when we go through an iteration without making any swaps, that means we are finished sorting. We don't need to continue with the other iterations. So, for each iteration, we set swap equal to false and if we do swap, we change swap to true. After the iteration has completed, we check to see if swap is false. If it is and we haven't swapped, we are done.

const swap = (array, index1, index2) => {
  let value1 = array[index1];
  array[index1] = array[index2];
  array[index2] = value1;
};

const bubbleSort = (array) => {
  let didSwap;
  for (let i = array.length; i >= 1; i--) {
    didSwap = false;
    for (let j = 0; j <= i - 2; j++) {
      console.log(i);
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        didSwap = true;
      }
    }
    if (didSwap === false) {
      break;
    }
  }
  return array;
};

//best case is where everything is already sorted.  first outer loop runs one time because the first number so o(1), and inner loop runs n-1 times because we stop at second to last number,o(1*(n-1)) and then we break out of our entire for loop, so its O(n) total because o(1+n-1)=o(n)

console.log(bubbleSort([3, 7, 4, 1, 4, 6, 0]));
