class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new Node(value);
  
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    contains(value) {
      return this.containsNode(this.root, value);
    }
  
    containsNode(node, value) {
      if (node === null) {
        return false;
      }
  
      if (value === node.value) {
        return true;
      }
  
      if (value < node.value) {
        return this.containsNode(node.left, value);
      } else {
        return this.containsNode(node.right, value);
      }
    }
  
    delete(value) {
      this.root = this.deleteNode(this.root, value);
    }
  
    deleteNode(node, value) {
      if (node === null) {
        return null;
      }
  
      if (value < node.value) {
        node.left = this.deleteNode(node.left, value);
      } else if (value > node.value) {
        node.right = this.deleteNode(node.right, value);
      } else {
        if (node.left === null && node.right === null) {
          node = null;
        } else if (node.left === null) {
          node = node.right;
        } else if (node.right === null) {
          node = node.left;
        } else {
          const minNode = this.findMinNode(node.right);
          node.value = minNode.value;
          node.right = this.deleteNode(node.right, minNode.value);
        }
      }
  
      return node;
    }
  
    findMinNode(node) {
      if (node.left === null) {
        return node;
      }
      return this.findMinNode(node.left);
    }
  
    // Post-order traversal: Left -> Right -> Root
    postOrderTraversal(node) {
      if (node !== null) {
        this.postOrderTraversal(node.left);
        this.postOrderTraversal(node.right);
        console.log(node.value);
      }
    }
  
    // Pre-order traversal: Root -> Left -> Right
    preOrderTraversal(node) {
      if (node !== null) {
        console.log(node.value);
        this.preOrderTraversal(node.left);
        this.preOrderTraversal(node.right);
      }
    }
  
    // In-order traversal: Left -> Root -> Right
    inOrderTraversal(node) {
      if (node !== null) {
        this.inOrderTraversal(node.left);
        console.log(node.value);
        this.inOrderTraversal(node.right);
      }
    }
  }
  
  // Example usage:
  const bst = new BinarySearchTree();
  bst.insert(5);
  bst.insert(3);
  bst.insert(7);
  bst.insert(2);
  bst.insert(4);
  bst.insert(6);
  bst.insert(8);
  
  console.log(bst.contains(4)); // Output: true
  console.log(bst.contains(9)); // Output: false
  
  console.log("Post-order traversal:");
  bst.postOrderTraversal(bst.root);
  
  console.log("Pre-order traversal:");
  bst.preOrderTraversal(bst.root);
  
  console.log("In-order traversal:");
  bst.inOrderTraversal(bst.root);
  
  bst.delete(5);
  
  console.log(bst.contains(5)); // Output: false
  