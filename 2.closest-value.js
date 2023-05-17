class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function findClosestValue(treeRoot, target) {
    let closest = treeRoot.value;
    let currentNode = treeRoot;
  
    while (currentNode !== null) {
      if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
        closest = currentNode.value;
      }
  
      if (target < currentNode.value) {
        currentNode = currentNode.left;
      } else if (target > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        // Found an exact match, no need to continue
        return currentNode.value;
      }
    }
  
    return closest;
  }
  
  // Example usage:
  const root = new Node(4);
  root.left = new Node(2);
  root.right = new Node(7);
  root.left.left = new Node(1);
  root.left.right = new Node(3);
  root.right.left = new Node(5);
  root.right.right = new Node(9);
  
  const target = 6;
  const closestValue = findClosestValue(root, target);
  console.log("Closest value to", target, "is", closestValue);
  