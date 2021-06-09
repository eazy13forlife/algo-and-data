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
    //we begin by creating our newNode
    const newNode = new Node(value);
    //if nothing is in our tree, we make the root of our tree equal the newNode, and then we are done.
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    //otherwise, we want to start from our root by making currentRoot equal the root of our tree and compare the value we want to insert with the value of our currentRoot. If it is greater than root value, we check to see if root has a right property. If it doesn't, great. Then we make the right property of the root equal this newNode (since it is greater than root value_ and we return because we're done. If it does have a right property, we update our currentRoot to equal this right property, so we can run our loop again. Ultimately, our loop will stop when our value is greater than the value of the currentRoot but the currentRoot has no right property.*this obvs work for left side as well, but im doing right just to show the process*. Also BST has no duplicates, otherwise searching wouldn't work, so if we put a duplicate, we just don't want to add it.
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

// for searching, we compare our search value to the value of currentRoot, which is initally the root of our tree.  If it is a match, great. we return true and we're done. Otherwise, if it is greater than the root value, we want to look at the right property of our current currentRoot to see if the search value is there, so we set our new currentRoot to be the right property of our current currentRoot and our loop runs again. If this new currentRoot is undefined, meaning there is no right property there(which means our value isn't in the tree), our while loop will break and false will be returned. Again, this works on the left side of course.
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
  
  //Same as above, but just the longer verson.
/*
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
*/
  breadthFirstSearch() {
    if(!this.root){
      return undefined;
    }
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
        traverseTree(node.left);
      }
      if (node.right) {
        traverseTree(node.right);
      }
    };
    traverseTree(currentNode);
    return nodeArray;
  }
  /*
  depthFirstSearchPreOrder recursive solution
  if (!this.root) {
    return undefined;
  }
  let stack = [this.root];
  let visited = [];
  while (stack.length) {
    let currentNode = stack.pop();
    if (currentNode.right) {
      stack.push(currentNode.right);
    }
    if (currentNode.left) {
      stack.push(currentNode.left);
    }
    visited.push(currentNode);
  }
  return visited;
}
*/

  depthFirstSearchPostOrder() {
    if(!this.root){
      return undefined;
    }
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
    if(!this.root){
      return undefined;
    }
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


const trees = new BinarySearchTree();
trees.insert(9);
trees.insert(4);
trees.insert(11);
trees.insert(3);
trees.insert(83);
console.log(trees.search(12));
console.log(trees);
