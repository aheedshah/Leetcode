/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let solList = new ListNode(0);
    solList.next = head;
    let onePointer = solList;
    let twoPointer = solList;

    for(let i =0; i<=n; i++) {
        onePointer = onePointer.next;
    }

    while(onePointer!==null) {
        onePointer = onePointer.next;
        twoPointer = twoPointer.next;
    }

    twoPointer.next = twoPointer.next.next;

    return solList.next;
};