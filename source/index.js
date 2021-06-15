class HashTable {
  constructor(arraySize = 53) {
    this.keyMap = new Array(arraySize);
  }
  hash(key) {
    let total = 0;
    let uniquePrime = 31;
    let charCode;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      charCode = key.charCodeAt(i) - 96;
      total = total * uniquePrime + charCode;
    }
    return total % this.keyMap.length;
  }
  set(key, value) {
    const index = this.hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap.push([key, value]);
  }
  get(key) {
    const index = this.hash(key);
    if (!this.keyMap[index]) {
      return undefined;
    } else {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
  }
  values() {
    let results = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          results.push(this.keyMap[i][j][1]);
        }
      }
    }
    return results;
  }
}
