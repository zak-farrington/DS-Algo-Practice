/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// RECURSIVE VERSION BELOW
// var reverseList = function(head) {
//     return recurse(null, head);
//   };
  
//   var recurse = function (prev, curr) {
//     if(curr == null) return prev;
    
//     //save new next node
//     var newNext = curr.next;        
    
//     //reverse
//     curr.next = prev;
    
//     //reverse rest of the list
//     return recurse(curr, newNext);
//   }
/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    let nextNode = current.next;
    console.log(`Before: current=${current ? current.val : null}, prev=${prev ? prev.val : null}, next=${nextNode ? nextNode.val : null}`);

    current.next = prev;
    prev = current;
    current = nextNode;

    console.log(`After: current=${current ? current.val : null}, prev=${prev ? prev.val : null}, next=${nextNode ? nextNode.val : null}`);
    console.log('---');
  }

  return prev;
};


var reverseList = function(head) {
  let newHead = null;
  let current = head;
  let previous = null; 
  while (current !== null) {
      let next = current.next;
      if (current.visited) {
          // Cycle detected, handle the error
          console.error("Error - Found cycle in the ListNode");
          return null;
      }
      current.visited = true;
      current.next = previous;
      previous = current;
      current = next;
  }

  newHead = previous;

  return newHead;
};

// Create a sample linked list: 1 -> 2 -> 3 -> 4 -> 5 -> null
const node5 = new ListNode(5);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

// Call the reverseList function with the head of the list
const reversedHead = reverseList(node1);

console.log(reversedHead); // Log the new head of the reversed list
