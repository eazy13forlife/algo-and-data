import Node from "./Udemy/data_structures/nodeClassDoubly.js";

const searchSubstring = (word, sub) => {
  let left = 0;
  let right = 0;
  while (left < word.length) {
    console.log(left);
    console.log(right);
    if (word[left] === sub[right]) {
      left++;
      right++;
      if (right >= sub.length) {
        return true;
      }
    } else {
      left++;
      right = 0;
    }
  }
  return false;
};

console.log(searchSubstring("wowowowomgomg", "omg"));
const inventory = [
  {
    name: "Nike Air Force 1 Crater FlyKnit",
    price: 110,
  },
  {
    name: "Air Jordan 1 Mid",
    price: 115,
  },
  {
    name: "Nike Air Max Plus",
    price: 160,
  },
  {
    name: "Nike Air Zoom Tempo NEXT%",
    price: 200,
  },
  {
    name: "Jordan MA2",
    price: 125,
  },
  {
    name: "Jordan 4 G NRG",
    price: 200,
  },
  {
    name: "KD14",
    price: 150,
  },
  {
    name: "Nike Air Max 90 Exeter Edition",
    price: 130,
  },
  {
    name: "Nike Air Raid",
    price: 140,
  },
  {
    name: "Nike Air Vapormax Evo",
    price: 200,
  },
  {
    name: "Nike Crater Impact",
    price: 100,
  },
  {
    name: "Nike Pegasus Trail 2",
    price: 130,
  },
  {
    name: "Nike SB Zoom Blazer Mid Premium",
    price: 110,
  },
  {
    name: "Nike Winflo 8",
    price: 90,
  },
  {
    name: "PG 5",
    price: 110,
  },
  {
    name: "Zion 1",
    price: 120,
  },
];
