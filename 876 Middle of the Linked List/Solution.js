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
var middleNode = function(head) {
    //Approach 1. Iterate through this list, find length and return val
    let newList = head;
    let length = 0;

    while(newList) {
        newList = newList.next;
        length++;
    }

    let middle = Math.floor(length/2);

    for(let i = 0; i<length; i++) {
        if(i===middle) {
            return head;
        }
        head = head.next;
    }

};