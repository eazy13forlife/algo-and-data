const isSubsequence = (string1, string2) => {
  const string1New = string1.split(" ").join("");
  const string2New = string2.split(" ").join("");
  let i = 0;
  let j = 0;
  let uniqueString = "";

  while (j < string2New.length) {
    if (string1New[i] === string2New[j]) {
      uniqueString += string1New[i];
      console.log(uniqueString);
      if (uniqueString === string1New) {
        return true;
      }
      i++;
      j++;
    } else if (string1New[i] !== string2New[j]) {
      j++;
    }
  }
  return false;
};

console.log(isSubsequence("abc", "acb"));
