/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    /***
     Compare the values of the first nodes of the two lists, and whichever has the smaller value,
     add that node to our merged linked list and call the same function recursively with the next
     node of that list and the other list's current node. Repeat this process until one of the lists
     exhausts, and then return the merged list.
     */
    if(!list1) {
        return list2;
    } else if (!list2) {
        return list1;
    }
    if(list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};