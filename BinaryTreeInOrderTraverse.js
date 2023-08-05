/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {

    var arrayToReturn = [];
    

    var traverse = function(node)  {
        if(node != null)
        {
            traverse(node.left);
            arrayToReturn.push(node.val);
            traverse(node.right);
        }
    }

    traverse(root);

    return arrayToReturn;
};


