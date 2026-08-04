/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        let values = []; 

        //Traverse all linked lists and collect all values 
        for(let list of lists) {
            while (list !== null){
                values.push(list.val); 
                list = list.next; 
            }
        } 
        //sort the array in ascending order 
        values.sort((a, b) => a - b); 

        //Rebuild a new sorted linked list 
        let dummy = new ListNode(0); 
        let current = dummy;  

        for (let val of values) {
            current.next = new ListNode(val); 
            current = current.next; 
        } 
        return dummy.next; 
    }
}
