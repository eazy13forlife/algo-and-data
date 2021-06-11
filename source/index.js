import Node from "./Udemy/data_structures/nodeBST.js";

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
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
          return;
        }
      }
    }
  }

  search(value) {
    let currentRoot = this.root;
    while (currentRoot) {
      if (value === currentRoot.value.name) {
        return currentRoot.value;
      } else if (value > currentRoot.value.name) {
        currentRoot = currentRoot.right;
      } else if (value < currentRoot.left.name) {
        currentRoot = currentRoot.left;
      }
    }
    return false;
  }

  BFS() {
    if (!this.root) {
      return undefined;
    }
    const queue = [this.root];
    console.log(queue);
    const visited = [];
    while (queue.length) {
      const itemRemoved = queue.shift();

      queue.push(itemRemoved.left);

      queue.push(itemRemoved.right);

      visited.push(itemRemoved);
      console.log(queue);
    }
    return visited;
  }
  DFSPre() {
    if (!this.root) {
      return undefined;
    }
    const stack = [this.root];
    const visited = [];
    while (stack.length) {
      const itemRemoved = stack.pop();
      visited.push(itemRemoved);
      if (itemRemoved.right) {
        stack.push(itemRemoved.right);
      }
      if (itemRemoved.left) {
        stack.push(itemRemoved.left);
      }
    }
    return visited;
  }
}

const tree = new BST();

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

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.DFSPre());
