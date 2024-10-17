// DoublyLinkedList.js
const Node = require('./Node');

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
   // The push method takes a value as a parameter and assigns it as the tail of the list
    push(val) {
        const newNode = new Node(val);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
// The pop method removes the tail of the list
    pop() {
        if (!this.tail) return undefined;
        const removedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = removedNode.prev;
            this.tail.next = null;
            removedNode.prev = null;
        }
        this.length--;
        return removedNode.value;
    }
// The shift method removes the head of the list
    shift() {
        if (!this.head) return undefined;
        const removedNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = removedNode.next;
            this.head.prev = null;
            removedNode.next = null;
        }
        this.length--;
        return removedNode.value;
    }
   // The unshift method takes a value as a parameter and assigns it as the head of the list 
    unshift(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
// The get method takes an index number as a parameter and returns the value of the node at that index
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let current;
        if (index <= this.length / 2) {
            current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
        } else {
            current = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                current = current.prev;
            }
        }
        return current.value;
    }
// The set method takes an index number and a value as parameters, and modifies the node value at the given index in the list
    set(index, val) {
        const node = this.getNode(index);
        if (node) {
            node.value = val;
            return true;
        }
        return false;
    }
// The insert method
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        const newNode = new Node(val);
        const beforeNode = this.getNode(index - 1);
        const afterNode = beforeNode.next;

        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        if (afterNode) afterNode.prev = newNode;

        this.length++;
        return true;
    }
 // The remove method 
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        const removedNode = this.getNode(index);
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;

        this.length--;
        return removedNode.value;
    }
// The getNode method Returns the node at the specified index
    getNode(index) {
        if (index < 0 || index >= this.length) return null;
        let current;
        if (index <= this.length / 2) {
            current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
        } else {
            current = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                current = current.prev;
            }
        }
        return current;
    }
}

module.exports = DoublyLinkedList;
