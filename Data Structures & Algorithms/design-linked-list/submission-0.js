class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class MyLinkedList {
    constructor() {
        this.dummy = new Node(-1); 
        this.size = 0; 
    }

    /**
     * @param {number} index
     * @return {Node}
     */
    getPrev(index) {
        let curr = this.dummy; 
        for (let i = 0; i < index; i++){
            curr = curr.next; 
        }
        return curr; 
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (index < 0 || index >= this.size) return -1; 
        return this.getPrev(index).next.val; 
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        this.addAtIndex(0, val); 
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        this.addAtIndex(this.size, val); 
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if(index > this.size) return; 
        if(index < 0) index = 0; 

        const prev = this.getPrev(index); 
        const newNode = new Node(val); 
        newNode.next = prev.next; 
        prev.next = newNode;
        this.size++; 
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if(index < 0 || index >= this.size) return; 

        const prev = this.getPrev(index); 
        prev.next = prev.next.next; 
        this.size--; 
    }
}
