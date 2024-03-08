/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    //Approach 1
    //Take numbers from each of the lists, create a string with their values, reverse their order
    //change them into an int, add them, create a new list, add their values as listnodes

    let list1 = [];
    let list2 = [];
    while(l1) {
        list1.push(l1.val);
        l1 = l1.next;
    }
    while(l2) {
        list2.push(l2.val);
        l2 = l2.next;
    }

    list1 = parseInt(list1.reverse().join(''));
    list2 = parseInt(list2.reverse().join(''));

    let result = list1+list2;

    let resultArray = result.toString().split('').map(Number).reverse();


    let resultList = new ListNode(resultArray[0]);
    let curr = resultList;


    for(let i = 1; i<resultArray.length; i++) {
        curr.next = new ListNode(resultArray[i]);
        curr = curr.next;
    }

    return resultList;
};