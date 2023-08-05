// Creating a Binary Tree in JavaScript

class BinaryTreeNode {
    // Classes in JavaScript require constructor and this. notation to set class properties.
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  var traverseCount = 0;
  
  // Left - Root - Right
  function inOrderTraverse(node) {
    if (node != null) {
      traverseCount++;
      inOrderTraverse(node.left);
      console.log(node.value);
      inOrderTraverse(node.right);
      console.log(traverseCount);
    }
  }
  
  const arrayOfTreeData = [12, 18, 13, 1, 3, 20, 17, 19];
  
  const binaryTreeRoot = new BinaryTreeNode(arrayOfTreeData[0]);
  
  for (var i = 1; i < arrayOfTreeData.length; i++) {
    var newNode = new BinaryTreeNode(arrayOfTreeData[i]);
    var currentParent = binaryTreeRoot; // Reset currentParent for each newNode
  
    console.log(`Inserting ${arrayOfTreeData[i]}; Current Parent Value: ${currentParent.value}`);
  
    while (true) {
      if (newNode.value < currentParent.value) {
        if (currentParent.left == null) {
          console.log(`Left Node is null, adding ${newNode.value} to the left of ${currentParent.value}`);
          // No node on left, set new node
          currentParent.left = newNode;
          break;
        } else {
          // Node already on left, so traverse downward to the left further
          console.log(`Node already on the left. Must traverse down to the left of ${currentParent.value}`);
          currentParent = currentParent.left;
        }
      } else if (newNode.value > currentParent.value) {
        if (currentParent.right == null) {
          // No node on right, set new node
          console.log(`Right Node is null, adding ${newNode.value} to the right of ${currentParent.value}`);
          currentParent.right = newNode;
          break;
        } else {
          // Node already on right, so traverse downward to the right further
          console.log(`Node already on the right. Must traverse down to the right of ${currentParent.value}`);
          currentParent = currentParent.right;
        }
      }
    }
  }
  
  inOrderTraverse(binaryTreeRoot);
  