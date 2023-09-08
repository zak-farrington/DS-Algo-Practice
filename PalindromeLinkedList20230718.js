/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // Make a deep copy of the linked list
    let dummy = new ListNode(0);
    let current = dummy;
    let headTemp = head;

    // Populate deep copied linked list with same values as head
    while (headTemp) {
        current.next = new ListNode(headTemp.val);
        current = current.next;
        headTemp = headTemp.next;
    }

    let prev = null;
    current = dummy.next;
    let reversedHead = null;

    while(current) {
        const nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
        if(!nextNode) {
            // we've reached the end
            reversedHead = prev;
        }
    }

    
    while(head) {
        if(head.val != reversedHead.val) {
            return false
        }
        head = head.next;
        reversedHead = reversedHead.next;
    }

    return true;
};