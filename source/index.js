import Node from "./Udemy/data_structures/nodeBST.js";

class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    } else {
      let currentRoot = this.root;
      while (true) {
        if (value > currentRoot.value) {
          if (currentRoot.right) {
            currentRoot = currentRoot.right;
          } else {
            currentRoot.right = newNode;
            return;
          }
        } else if (value < currentRoot.value) {
          if (currentRoot.left) {
            currentRoot = currentRoot.left;
          } else {
            currentRoot.left = newNode;
            return;
          }
        } else if (value === currentRoot.value) {
          return "there is already that node here";
        }
      }
    }
  }
  search(value) {
    let currentRoot = this.root;
    if (!currentRoot) {
      return false;
    }
    while (true) {
      if (this.value === currentRoot.value) {
        return true;
      } else if (value > currentRoot.value) {
        if (currentRoot.right) {
          currentRoot = currentRoot.right;
        } else {
          return false;
        }
      } else if (value < currentRoot.value) {
        if (currentRoot.left) {
          currentRoot = currentRoot.left;
        } else {
          return false;
        }
      }
    }
  }
}

const tree = new BST();

console.log(tree.search(100));
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
