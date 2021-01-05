class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  hash(key) {
    let total = 0;
    let uniquePrime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      total = total * uniquePrime + (key.charCodeAt(i) - 96);
    }
    return total % this.keyMap.length;
  }

  set(key, value) {
    const index = this.hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this.hash(key);
    if (!this.keyMap[index]) {
      return undefined;
    }
    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (this.keyMap[index][i][0] === key) {
        return this.keyMap[index][i][1];
      }
    }
  }

  values() {
    const valueArray = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          valueArray.push(this.keyMap[i][j][1]);
        }
      }
    }
    return valueArray;
  }
}

const hi = new HashTable();
hi.set("maroon", "#800000");
hi.set("yellow", "#ffff00");
hi.set("olive", "#808000");
console.log(hi.get("olive"));

console.log(hi.keyMap);
