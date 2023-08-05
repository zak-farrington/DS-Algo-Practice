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
var reverseList = function(head) {

    let dummyHead = head;
    let prev = null;
    let curr = head;
    while(curr != null) {
        let nextNode = curr.next;
        // console.log(`${curr.val} is now  pointing to ${prev?.val}`);
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }
    
    return prev;
};