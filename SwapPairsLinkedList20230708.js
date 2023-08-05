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
var swapPairs = function(head) {
    let prev = null;
    let dummyHead = null;

    if(!head?.next) {
        return head;
    }
    else {
        dummyHead = head.next;
    }

    while(head && head.next)  {
        if(prev) {
            prev = head.next; 
        }

        slow.next = fast.next;
        fast.next = slow;

        slow = next;
        fast = slow.next.next;


    }

    return newHead;
};