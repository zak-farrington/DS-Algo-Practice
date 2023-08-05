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
    if(node != null)
    {
        traverseCount++;
        inOrderTraverse(node.left);
        console.log(node);
        inOrderTraverse(node.right);
        console.log(traverseCount);
    }
}

// Root - Left - Right
function preOrderTraverse(node) {
    while (node != null) {
        console.log(node);
        preOrderTraverse(node.left);
        preOrderTraverse(node.right);
    }
}

// Left - Right - Root
function postOrderTraverse(node) {
    while (node != null) {
        postOrderTraverse(node.left);
        postOrderTraverse(node.right);
        console.log(node);
    }
}

const arrayOfTreeData = [12, 18, 13, 1, 3, 20, 17, 19];

const binaryTreeRoot = new BinaryTreeNode(arrayOfTreeData[0]);

for(var i = 1; i < arrayOfTreeData.length; i++) {
    var current = new BinaryTreeNode(arrayOfTreeData[i]); 
    var previous = binaryTreeRoot;
    console.log(`Inserting ${arrayOfTreeData[i]}`);

    var insertedNode = false;
    while(!insertedNode) {
        if(current?.value < previous?.value) {
            if(previous.left  == null) {
                console.log("Left Node is null, adding", current);
                // No node on left, set new node
                previous.left = current;
            }
            else {
                // Node already on left, so travers downward to the left further
                console.log("Node already on the right of", previous.value);


                previous = previous.left;
            }
        }
        else if(current?.value > previous?.value) {
            if(previous.right == null) {
                // No node on right, set new node
                console.log("Right node is null, adding", current);
                previous.right = current;
            }
            else  {
                // Node already on right, so traverse downward to the right further
                console.log("Node already on the right of", previous.value);

                previous = previous.right;
            }
        }
        insertedNode = true;
    }
}

inOrderTraverse(binaryTreeRoot);