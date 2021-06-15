class HashTable {
  constructor(size = 53) {
    //new array creates an empty array with its length property set to what we defined. But every index is empty, unless we set that index equal to something first.
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

  //set accepts a key and value and places this key and its value inside our keyMap
  set(key, value) {
    //so we begin by findind the index of where our key lives in our array
    const index = this.hash(key);
    //if nothing is in that index,we make that index equal to an empty array first
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    //then we push in an array which contains the key, value. remember, we are using separate chaining, so we can have multiple arrays of key value pairs inside one index.
    this.keyMap[index].push([key, value]);
  }

  //get accepts a key and finds the value of this key inside our keyMap
  get(key) {
    //first, we find the index of where this key is located in our keyMap;
    const index = this.hash(key);
    //if that index is empty, just return undefined;
    if (!this.keyMap[index]) {
      return undefined;
    }
    //we loop through every array inside this index in our keyMap
    for (let i = 0; i < this.keyMap[index].length; i++) {
      //we look through every array in this index(this.keyMap[index][i]) and look at its 0 index to check if the key equals what we are looking for and if it does, we return the 1 index in that array, which contains the value. Remember, the 0 index inside an individual array is the key and the 1 index is the value
      if (this.keyMap[index][i][0] === key) {
        return this.keyMap[index][i][1];
      }
    }
  }

  //will loop through our hash table and return an array of all the keys inside this table
  keys() {
    const results = [];
    //for every index in our keyMap
    for (let i = 0; i < this.keyMap.length; i++) {
      //keyMap[i] has to exist for our j loop to work because our j loop pushes in keyMap[i[j][1] so if keyMap[i] isnt a thing, we will get an error stating that.
      if (this.keyMap[i]) {
        //look at every index inside that index and push in the key,which is the 0 index
        for (let j = 0; j < this.keyMap[i].length; j++) {
          results.push(this.keyMap[i][j][0]);
        }
      }
    }
  }

  //will loop through our hashTable ad return an array of all values inside this table
  values() {
    const valueArray = [];
    //for every index in our keyMap
    for (let i = 0; i < this.keyMap.length; i++) {
      //keyMap[i] has to exist for our j loop to work because our j loop pushes in keyMap[i[j][1] so if keyMap[i] isnt a thing, we will get an error stating that.
      if (this.keyMap[i]) {
        //look at every index inside that index and push in the value,which is the 1 index
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
