// main.js
const DoublyLinkedList = require('./DoublyLinkedList');

const list = new DoublyLinkedList();

// Test push
list.push(10);
list.push(20);
list.push(30);
list.push(40);
console.log("After push:", list);

// Test pop
list.pop()
console.log("After pop:", list);

// Test shift
list.shift();
console.log("After shift:", list); 

// Test unshift
list.unshift(5);
console.log("After unshift:", list);


// Test get
console.log("Get index 1:", list.get(1));

// Test set
list.set(1, 50);
console.log("After set index 1 to 50:", list);

// Test insert
list.insert(1, 60);
console.log("After insert 60 at index 1:", list);

// Test remove
list.remove(1);
console.log("After remove:", list);
