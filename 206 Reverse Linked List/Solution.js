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
    let solutionList = null;
    let current = head;

    while(current) {
        let nextNode = current.next;
        current.next = solutionList;
        solutionList = current;
        current = nextNode;
    }

    return solutionList;
};