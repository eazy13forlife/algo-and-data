const hash = (string, arrayLenghth) => {
  let total = 0;
  let charCode;
  for (let i = 0; i < string.length; i++) {
    charCode = string.charCodeAt(i) - 96;
    total += charCode;
  }
  return total;
};
console.log(hash("hello"));
