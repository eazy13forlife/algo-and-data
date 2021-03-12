const same = (array1, array2) => {
  // if their lengths arent even the same, then they can't consist of the same values, so just return false;
  if (array1.length !== array2.length) {
    return false;
  }

  let freqCounter1 = {};
  let freqCounter2 = {};

  // for every item in array1
  for (let i = 0; i < array1.length; i++) {
    // we get the value for each index
    const value = array1[i];
    // now we make the value the key for frequency counter 1 and if that key exists, then we add 1 to its value. if the key doesn't already exist, we just make the value 1. And remember, our frequency counter takes all the values in our array as keys and the values for those keys are how many times they show up in our array
    freqCounter1[value] = freqCounter1[value] ? ++freqCounter1[value] : 1;
  }

  for (let i = 0; i < array2.length; i++) {
    const value = array2[i];
    // wwe add 1 to freqCounter and then return it, so that freqCounter2[value] will have the returned value as opposed to returning the current freqCounter2[value] and then incrementing it by 1
    freqCounter2[value] = freqCounter2[value] ? ++freqCounter2[value] : 1;
  }

  const keys1 = Object.keys(freqCounter1);

  // for each key in our keys1 array
  for (let i = 0; i < keys1.length; i++) {
    // get the value for that index
    const value = keys1[i];

    // if the value squared in freqCounter2 doesnt even exist, return false;
    if (!freqCounter2[value ** 2]) {
      console.log("yo");
      return false;
    }

    // if the number of times the value appears in freqCounter1 isnt the same number of  times for the same value squared in array2(because array2 contains array1 values but squared), return false;
    if (freqCounter1[value] !== freqCounter2[value ** 2]) {
      return false;
    }
  }

  // we also could have done for(let key in freqCounter1){},but we get an ESLint error, so i avoided it here)
  return true;
};

console.log(same([2, 3, 4], [4, 15, 9]));
