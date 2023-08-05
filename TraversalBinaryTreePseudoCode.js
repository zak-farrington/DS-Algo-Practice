// Traversal In Binary Tree Pseudo Code

// Root - Left - Right
void preOrderTraverse(var root) {
    while (root) {
        console.log(root);
        preOrderTraverse(root.left);
        preOrderTraverse(root.right);
    }
}

// Left - Right - Root
void postOrderTraverse(var root) {
    while (root) {
        preOrderTraverse(root.left);
        preOrderTraverse(root.right);
        console.log(root);
    }
}
// Left - Root - Right
void inOrderTraverse(var root) {
    while (root) {
        preOrderTraverse(root.left);
        console.log(root);
        preOrderTraverse(root.right);
    }
}