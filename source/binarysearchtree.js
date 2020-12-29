import Node from "./nodeBST.js";
// class Node {
// constructor(value) {
// this.value = value;
// this.right = null;
// this.left = null;
// }
//  }

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let currentRoot = this.root;
    while (true) {
      if (value > currentRoot.value) {
        if (!currentRoot.right) {
          currentRoot.right = newNode;
          return this;
        } else {
          currentRoot = currentRoot.right;
        }
      } else if (value < currentRoot.value) {
        if (!currentRoot.left) {
          currentRoot.left = newNode;
          return this;
        } else {
          currentRoot = currentRoot.left;
        }
      } else if (value === currrentRoot.value) {
        return `There already exists this value.`;
      }
    }
  }

  search(value) {
    if (typeof value !== "number") {
      return false;
    }
    let currentRoot = this.root;
    while (currentRoot) {
      if (value === currentRoot.value) {
        return true;
      } else if (value < currentRoot.value) {
        currentRoot = currentRoot.left;
      } else if (value > currentRoot.value) {
        currentRoot = currentRoot.right;
      }
    }
    return false;
  }

  BreadthFirstSearch() {
    const checkLR = [];
    const queue = [];
    queue.push(this.root);
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

  depthFirstSearchPreOrder() {
    const nodeArray = [];
    const currentNode = this.head;
    const traverseTree = (node) => {
      nodeArray.push(node);
      if (node.left) {
        traverseTree(n    ode.left);
      }
      if (node.right) {
        traverseTree(node.right);
      }
    };
    traverseTree(currentNode);
    return nodeArray;
  }

  depthFirstSearchPostOrder() {
    const nodeArray = [];
    const traverseTree = (node) => {
      if (node.left) {
        traverseTree(node.left);
      }
      if (node.right) {
        traverseTree(node.right);
      }
      nodeArray.push(node);
    };
    traverseTree(this.root);
    return nodeArray;
  }

  depthFirstSearchInOrder(){
    const nodeArray=[];
    const traverseTree(node)=>{
      if(node.left){
        traverseTree(node.left)
      }
      nodeArray.push(node);
      if(node.right){
          traverseTree(node.right)
      }
    }
    traverseTree(this.root);
    return nodeArray;
  }
}
/*
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
*/

const trees = new BinarySearchTree();
trees.insert(9);
trees.insert(4);
trees.insert(11);
trees.insert(3);
trees.insert(83);
console.log(trees.search(12));
console.log(trees);
