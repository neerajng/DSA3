class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function validateBST(root) {
    let prevValue = null;
    let isValid = true;
  
    function inOrderTraversal(node) {
      if (node === null) {
        return;
      }
  
      inOrderTraversal(node.left);
  
      if (prevValue !== null && node.value <= prevValue) {
        isValid = false;
        return;
      }
  
      prevValue = node.value;
  
      inOrderTraversal(node.right);
    }
  
    inOrderTraversal(root);
  
    return isValid;
  }
  
  // Example usage:
  const root = new Node(4);
  root.left = new Node(2);
  root.right = new Node(7);
  root.left.left = new Node(1);
  root.left.right = new Node(3);
  root.right.left = new Node(5);
  root.right.right = new Node(9);
  
  console.log(validateBST(root)); // Output: true
  
  // Modifying the tree to invalidate BST property
  root.right.left.value = 6;
  console.log(validateBST(root)); // Output: false
  