/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    const dummy = new ListNode(0, head);

    let before = dummy;

    for(let i = 1; i < left; i++) {
        before = before.next;
    }

    let prev = before;
    console.log(`before and prev is ${prev.val}`);
    let current = before.next;
    console.log(`current is before.next: ${current.val}`);


    // start: reverse left until right

    for(let i = left; i <= right; i++) {
        const nextNode = current.next;
        console.log(`Before: current=${current ? current.val : null}, prev=${prev ? prev.val : null}, next=${nextNode ? nextNode.val : null}`);
        current.next = prev;
        prev = current;
        current = nextNode;
        console.log(`After: current=${current ? current.val : null}, prev=${prev ? prev.val : null}, next=${nextNode ? nextNode.val : null}`);
    }
    // end: reverse left until right
    console.log(`current is ${before.val}`);
    console.log(`prev is ${before.val}`);

    before.next.next = current;
    before.next = prev;

    // Before is now at our starting point for left
    return dummy.next;
};