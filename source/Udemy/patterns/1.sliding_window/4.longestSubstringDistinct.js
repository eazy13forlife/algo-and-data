// Given a string, find the length of the longest substring in it with no more than K distinct characters.
/*
 Example 1:
Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".
Example 2:

Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".
Example 3:

Input: String="cbbebi", K=3
Output: 5
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
*/

const longestSubstringDistinct = (string, targetNumber) => {
  let startWindow = 0;
  let endWindow = 0;
  let maxLength = -Infinity;
  let uniqueObject = {};

  while (startWindow < string.length && endWindow < string.length) {
    if (
      Object.keys(uniqueObject).length === targetNumber &&
      !uniqueObject[endWindow]
    ) {
      maxLength = Math.max(endWindow - startWindow + 1, maxLength);
      startWindow += 1;
      endWindow = startWindow;
      uniqueObject = {};
    } else {
      uniqueObject[string[endWindow]] = true;
      endWindow++;
      console.log(uniqueObject);
    }
  }
  return maxLength;
};

// going to be continous so we use slidingWindow;
// they dont give us a window, so we create one our own
const longestDistinctLength = (string, targetNumber) => {
  // we need variable to keep track of startingWindow
  // we need to keep track of maxLength;
  // we need to keep track of disctinct characters, using an object;

  let startWindow = 0;
  let maxLength = 0;
  let distinctCharacters = {};

  // our endWindow will begin at the 0 index and we want to look at everything in our string, so it will end at the last letter in our string
  for (let endWindow = 0; endWindow < string.length; endWindow++) {
    // now we immediately put the letter in our distinctCharacters object and set a count to it, so we can easily adjust with our startWindow
    const letter=string[endWindow];
    if(!distinctCharacters[letter]){
      distinctCharacters[letter]=0;
    }else{
          distinctCharacters[letter]+=1;
    }

// now if the length of keys is greater than our target number,we want to move our window up one. Fo example, we go araa and at that point, the maxLength is 4. Once we add c, we realize that there are more than 2 distinct characters, so we don't count this length.So now, we need to start from r and see how far we can go of finding the longest substring with no more than k distinct characters BUT we dont need to repeat everything from r. so we just remove a(the first letter), and move our startWindow up one. If from r to where our current endWindow is (c) contains no more than 2 distinct characters, then we're good and can increase our endWindow. If it does though, we're going to have to start from "a" and see how far we can go etc. But we dont want to repeat from a, so we just subtract r and move our startWindow up, so we are at a.  S
    while(Object.keys(distinctCharacters).length>targetNumber){
      const startLetter=string[startWindow];
      distinctCharacters[startLetter]-=1; //our uniqueObject contained the frequency of the letters in our window, but since we are removing this letter from our window, we decrement it from our uniqueObject
      if(distinctCharacters[startLetter]===0){
        delete distinctCharacters[startLetter]// we want to delete it if its equal to 0, so we will know that they key no longer exists and it wont be factored into our Object.keys(frequencyObject).length<target
      }
      startWindow+=1;

    }

    //if the length of keys isnt greater than our targetNumber we can calculate the length of the window right here and now. and then our for loop will increase the endWindow to check again.
    maxLength=Math.max(maxLength,endWindow-startWindow+1)

  return maxLength;
};

console.log(longestSubstringDistinct("araaci", 2));





























const longestSubArray=(string,targetNumber)=>{
  let startWindow=0;
  let maxArrayLength=-Infinity;
  let uniqueletters=[];
  for(let endWindow=0;endWindow<string.length;endWindow++){
    let letter=string[endWindow]
    if(!uniqueLetters[letter]){
      uniqueLetters[letter]=0
    }else{
      uniqueLettesr[letter]+=1
    }

    while(Object.keys(uniqueLetters).length>targetNumber){
      const startLetter=string[endWindow];
      uniqueLetters[startLetter]-=1;
      if(uniqueLetters[startLetter]===0){
        delete uniqueLetters[startLetter]
      }
      startWindow+=1;
    }

    maxArrayLength=Math.max(maxArrayLength,endWindow-startWindow+1)
  }
}
