/////////////////////////Easy
//Question1: What is a linked list, and how does it differ from an array?
//Answer1:A linked list is a linear data structure where elements (nodes) are stored non-contiguously in memory. Each node contains: 1. Data (the value of the element). 2. Pointer (Reference) to the next node in the sequence. A linked list stores elements dynamically in non-contiguous memory, while an array stores elements in a fixed-size, contiguous block. Insertion and deletion are faster in a linked list, especially at the head, because no shifting is required, whereas arrays require shifting elements, making these operations slower. However, accessing an element in an array is much faster (O(1)) since it supports direct indexing, while a linked list requires traversal (O(n)). Linked lists use extra memory for pointers, whereas arrays store only the data. Additionally, linked lists can grow dynamically, while arrays need resizing, which can be inefficient.

class Node {
  constructor(value) {
    this.data = value; // The value of the node
    this.next = null; // The reference to the next node
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  //Question2: Implement a function to insert a node at the beginning of a linked list.
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  //Question3: How do you delete a node from a linked list?
  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
  }

  //Question4: Write a function to traverse and print a linked list.
  traverseAndPrint() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + " -> ";
      current = current.next;
    }
    console.log(result + "null");
  }

  //Question5: Implement a function to find the length of a linked list.
  getLength() {
    let count = 0;
    let current = this.head;

    while (current) {
      count++;
      current = current.next;
    }

    return count;
  }

  /////////////////////////Meduim
  //Question6: Write a function to find the middle node of a linked list.
  findMiddleNode() {
    const middleNodeIndex = Math.floor(this.getLength() / 2);
    const middleNode = this.traverseToIndex(middleNodeIndex);
    return middleNode;
  }

  //Question7: Implement a function to reverse a linked list.
  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current) {
      next = current.next; // Save next node
      current.next = prev; // Reverse the link
      prev = current; // Move prev forward
      current = next; // Move current forward
    }

    this.head = prev; // Update head to new first node
  }
  //Question8: How do you detect a cycle in a linked list?
  detectCycle() {
    let fast,
      slow = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (fast === slow) {
        return true;
      }
    }
    return false;
  }

  //Question10: How do you find the nth node from the end of a linked list?
  findNthfromEnd(n) {
    let fast = this.head;
    let slow = this.head;

    //Move faster pointer n steap head
    for (let i = 0; i < n; i++) {
      if (fast === null) {
        console.log("The list is shorter than n nodes.");
        return null;
      }
      fast = fast.next;
    }

    //Move both pointers until fast reaches the end
    while (fast !== null) {
      fast = fast.next;
      slow = slow.next;
    }
    //Slow pointer is now at the nth node from the end
    return slow;
  }

  /////////////////////////Hard
  //Question11: Implement a function to remove duplicates from a linked list.
  removeDuplicates() {
    let seen = new Set();
    let current = this.head;
    let prev = null;

    while (current) {
      if (seen.has(current.data)) {
        prev.next = current.next; // Skip the duplicate node
      } else {
        seen.add(current.data);
        prev = current;
      }
      current = current.next;
    }
  }

  //Question13: Write a function to find the starting point of a cycle in a linked list.
  findStartingCycle() {
    let visited = new Set();
    let current = this.head;

    while (current) {
      if (visited.has(current)) {
        return current;
      }
      visited.add(current);
      current = current.next;
    }

    return null;
  }

  //Question14: Implement a function to group even and odd nodes together in a linked list.
  groupEvenOdd() {
    if (!this.head || !this.head.next) return this.head; // Edge case: empty or single-node list

    let odd = this.head; // Pointer to odd nodes
    let even = this.head.next; // Pointer to even nodes
    let evenHead = even; // Store the head of even list

    while (even && even.next) {
      odd.next = even.next; // Link odd to the next odd node
      odd = odd.next; // Move odd pointer forward

      even.next = odd.next; // Link even to the next even node
      even = even.next; // Move even pointer forward
    }

    odd.next = evenHead; // Attach even list at the end of odd list
    return this.head; // Return updated head
  }
}
const list = new LinkedList(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
// list.append(4);
// list.append(5);
// list.append(1);
// console.log("Original List:");
// list.traverseAndPrint();
// list.insert(2, 99);
// list.removeDuplicates();
// console.log("Remove duplicates List:");
// list.traverseAndPrint();
// list.remove(1);
// list.getLength();
// list.findMiddleNode();
console.log("Original List:");
list.traverseAndPrint();
list.groupEvenOdd();
console.log("Group List:");
// list.traverseAndPrint();
// console.log(list.findNthfromEnd(2));
// list.reverse();
// console.log("Reversed List:");
// list.traverseAndPrint();

//Question9: Write a function to merge two sorted linked lists.
function mergeSortedLists(list1, list2) {
  let dummy = new Node(-1); // Step 1: Create dummy node
  let tail = dummy;

  let l1 = list1.head;
  let l2 = list2.head;

  while (l1 && l2) {
    // Step 2: Compare l1 and l2
    if (l1.data < l2.data) {
      tail.next = l1; // Attach smaller node
      l1 = l1.next; // Move forward in list1
    } else {
      tail.next = l2; // Attach smaller node
      l2 = l2.next; // Move forward in list2
    }
    tail = tail.next; // Move tail forward
  }

  // Step 3: Attach remaining nodes from non-empty list
  tail.next = l1 || l2;

  return dummy.next; // Skip dummy node and return merged list
}
// Example Usage:
const list1 = new LinkedList(1);
list1.append(2);
list1.append(3);
// console.log("List 1:");
// list1.traverseAndPrint(); // Output: 1 -> 3 -> 4 -> 5 -> null
const list2 = new LinkedList(4);
list2.append(5);
list2.append(6);
// console.log("List 2:");
// list2.traverseAndPrint(); // Output: 2 -> 4 -> 6 -> null

const mergedHead = mergeSortedLists(list1, list2);
const mergedList = new LinkedList(mergedHead.data);
mergedList.head = mergedHead;
// console.log("Merged Sorted List:");
// mergedList.traverseAndPrint(); // Output: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null

//Question12: How do you check if two linked lists intersect?
function isIntersect(list1, list2) {
  let seen = new Set();
  let current1 = list1.head;
  let current2 = list2.head;

  while (current1) {
    seen.add(current1);
    current1 = current1.next;
  }

  while (current2) {
    if (seen.has(current2)) {
      return true;
    }
    current2 = current2.next;
  }
  return false;
}
// console.log(isIntersect(list1, list2));

//Question15: Write a function to add two numbers represented as linked lists.
function addTwoNumbers(list1, list2) {
  let dummy = new Node(-1); // Dummy node to simplify result list
  let tail = dummy;
  let carry = 0;

  let l1 = list1.head;
  let l2 = list2.head;

  while (l1 || l2 || carry) {
    let sum = (l1 ? l1.data : 0) + (l2 ? l2.data : 0) + carry;
    carry = Math.floor(sum / 10); // Get carry for next sum
    tail.next = new Node(sum % 10); // Store only the last digit
    tail = tail.next; // Move tail forward

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummy.next; // Return head of the result list
}
const list3 = new LinkedList(1);
list3.append(2);
list3.append(3);
console.log("List 3:");
list3.traverseAndPrint();

const list4 = new LinkedList(4);
list4.append(5);
list4.append(6);
console.log("List 4:");
list4.traverseAndPrint();

const resultHead = addTwoNumbers(list3, list4);
const resultList = new LinkedList();
resultList.head = resultHead;
console.log("Sum Linked List:");
resultList.traverseAndPrint();
