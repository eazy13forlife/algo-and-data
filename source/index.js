import Node from "./nodeBST.js";
/*
class Node{
  constructor(value){
    this.value=value;
    this.left=null;
    this.right=null;
  }
}
*/

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
            return this;
          }
        } else if (value < currentRoot.value) {
          if (currentRoot.left) {
            currentRoot = currentRoot.left;
          } else {
            currentRoot.left = newNode;
            return this;
          }
        } else if (value === currentRoot.value) {
          return undefined;
        }
      }
    }
  }

  search(value) {
    if (typeof value !== "number") {
      return false;
    }
    if (!this.root) {
      return null;
    }
    let currentRoot = this.root;
    while (true) {
      if (value === currentRoot.value) {
        return true;
      } else if (value < currentRoot.value) {
        if (!currentRoot.left) {
          return false;
        } else {
          currentRoot = currentRoot.left;
        }
      } else if (value > currentRoot.value) {
        if (!currentRoot.right) {
          return false;
        } else {
          currentRoot = currentRoot.right;
        }
      }
    }
  }
  breadthFirstSearch() {
    if (!this.root) {
      return undefined;
    }
    const checkLR = [];
    const queue = [this.root];
    while (queue.length !== 0) {
      const nodeToCheck = queue.shift();
      checkLR.push(nodeToCheck);
      if (nodeToCheck.left) {
        queue.push(nodeToCheck.left);
      }
      if (nodeToCheck.right) {
        queue.push(nodeToCheck.right);
      }
    }
    return checkLR;
  }
}

const first = new BST();
first.insert(10);
first.insert(6);
first.insert(3);
first.insert(8);
first.insert(15);
first.insert(20);
console.log(first.breadthFirstSearch());
