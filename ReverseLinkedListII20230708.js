// THIS CODE IS OLD AND DOESN'T WORK
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
    const dummyHead = head;
    let prev = null;
    let currentPosition = 0;
    
        const reverseSectionStartNode = null;
        const reverseSectionEndNode = null;
    while(head.next) {
        prev = head;

        currentPosition++;
        if(currentPosition >= left && currentPosition <= right) {
            if(!reverseSectionStartNode) {
                reverseSectionStartNode = head;
            }
            const nextNode = head.next;
            
            if(prev) {
                head.next = prev;
            }
            
            if(reverseSectionEndNode === right && !reverseSectionEndNode) {
                reverseSectionEndNode = head;
            }
            
            head = nextNode;
            
            
        }
        else {
         head = head.next;
        }
    }
    
    return dummyHead;
};