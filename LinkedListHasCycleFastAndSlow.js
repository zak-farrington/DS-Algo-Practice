/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow = head;
    let fast = head;

    let pos = null;
    while(fast?.next) {
        // We know we will be cylcing.  How can I know?
        // How can I set pos?
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast) {
            return true;
        }
    }
    return false;
};