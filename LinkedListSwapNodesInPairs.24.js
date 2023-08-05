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
    let newHead = head.next;

    if(!head?.next) {
        return head;
    }
    while(head?.next)  {
        console.log(`Looping for current: ${head.val}`);
        if(prev) {
            prev.next = head.next;
        }

        prev = head; // save pointer to 1 or 3 for re-use

        let nextNode = head.next.next; 
        head.next.next = head; 


        head.next = nextNode;
        head = nextNode
    }

    return newHead;
};


// Chat GPT version 
// var swapPairs = function(head) {
//     if(!head || !head.next) {
//         return head;
//     }

//     let prev = null;
//     let current = head;
//     let newHead = head.next;

//     while(current && current.next) {
//         let nextNode = current.next;
//         let nextPair = nextNode.next;

//         // Adjusting 'prev' if it's not null
//         if(prev) {
//             prev.next = nextNode;
//         }

//         // Swapping the pair
//         current.next = nextPair;
//         nextNode.next = current;

//         // Updating 'prev' and 'current' for the next iteration
//         prev = current;
//         current = nextPair;
//     }

//     return newHead;
// };
