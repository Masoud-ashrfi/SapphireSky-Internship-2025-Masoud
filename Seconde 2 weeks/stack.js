/////////////////////////Easy
//Question1: What is a stack, and how does it follow the LIFO principle?
//Answer1: A stack is a data structure that follows the Last In, First Out (LIFO) principle. This means that the last element added to the stack is the first one to be removed.How the LIFO Principle Works: 1. Push (Add an item) – When a new item is added, it is placed on the top of the stack. 2. Pop (Remove an item) – When an item is removed, it is always taken from the top.

//Question2: Implement a stack using an array in JavaScript.
class Stack {
  constructor() {
    this.items = [];
  }

  // Add item to the stack (Push)
  push(item) {
    this.items.push(item);
  }

  // Remove and return the top item (Peek)
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // View the top item
  peek() {
    return this.items[this.items.length - 1];
  }

  // Check if stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Print stack for visualization
  print() {
    console.log(this.items.join(" -> "));
  }
}
const stack = new Stack();
stack.push(3);
stack.push(1);
stack.push(5);
stack.push(2);
stack.push(4);
// console.log("Original Stack:");
// stack.print();
// console.log(stack.items.length);

//Question3: How do you implement a stack using a linked list?
class Node {
  constructor(value) {
    this.data = value; // The value of the node
    this.next = null; // The reference to the next node
  }
}

class ListStack {
  constructor() {
    this.head = null; // Start with an empty stack
    this.length = 0; // Keep track of size
  }

  // Add item to the stack (Push)
  push(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head; // New node points to old head
      this.head = newNode; // Update head
    }
    this.length++;
  }

  // Remove and return the top item (Pop)
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    const poppedValue = this.head.data;
    this.head = this.head.next; // Move head to next node
    this.length--;
    return poppedValue;
  }

  // View the top item (Peek)
  peek() {
    return this.isEmpty() ? "Stack is empty" : this.head.data;
  }

  // Check if stack is empty
  isEmpty() {
    return this.head === null;
  }
}
const listStack = new ListStack();
listStack.push(10);
listStack.push(20);
listStack.push(30);
// console.log(listStack.pop());
// console.log(listStack);

//Question4: Explain the purpose of push() and pop() in a stack.
//Answer4: A stack follows the LIFO (Last In, First Out) principle, meaning the last item added is the first one removed. The two main operations in a stack are: 1. push(value) → Adds an item to the top of the stack. 2. pop() → Removes and returns the top item from the stack.

//Question5: write a function to check if a given string has balanced parentheses.
function isBalanced(str) {
  const stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(str[i]); // Push opening bracket
    } else if (str[i] === ")") {
      if (stack.isEmpty()) return false; // If there’s no matching '(', return false
      stack.pop(); // Remove the matched '('
    }
  }

  return stack.isEmpty(); // If stack is empty, it's balanced
}
// console.log(isBalanced("(")); // false
// console.log(isBalanced("()")); // true

/////////////////////////Medium
//Question6: Implement a function to reverse a string using a stack.
function reversedStr(str) {
  let reversedStr = "";
  const stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  while (!stack.isEmpty()) {
    reversedStr += stack.pop();
  }

  return reversedStr;
}
// console.log(reversedStr("masoud"));

//Question7: How do you implement a stack with two queues?
class QueuesStack {
  constructor() {
    this.q1 = []; // main queue
    this.q2 = []; // helper queue
  }

  // We made sure the last pushed item is moved to the front of the queue
  push(x) {
    // Step 1: Enqueue x to q2 (temporary queue)
    this.q2.push(x);

    // Every time we push a new item, we rebuild q1 so that the new item is always in the front, simulating a stack using queue behavior.
    // Step 2: Move all elements from q1 to q2
    while (this.q1.length > 0) {
      this.q2.push(this.q1.shift());
    }

    // Step 3: Swap q1 and q2
    [this.q1, this.q2] = [this.q2, this.q1];
  }

  // Even though .shift() sounds like it's removing the first element in a queue, we made sure that the "first" element in q1 is always the last-pushed item
  pop() {
    if (this.q1.length === 0) return "Stack is empty";
    return this.q1.shift();
  }

  top() {
    if (this.q1.length === 0) return "Stack is empty";
    return this.q1[0];
  }

  empty() {
    return this.q1.length === 0;
  }
}
const queuesStack = new QueuesStack();
queuesStack.push(10);
queuesStack.push(20);
queuesStack.push(30);
// console.log(queuesStack.pop());

//Question8: Write a function to evaluate a postfix expression using a stack.
function evalPostfixExpre(str) {
  const stack = new Stack();
  const operations = new Set(["+", "*", "/", "-"]);

  for (let i = 0; i < str.length; i++) {
    if (!operations.has(str[i]) && str[i] !== " ") {
      stack.push(Number(str[i])); // Convert to number before pushing
    } else if (operations.has(str[i])) {
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      let result;

      switch (str[i]) {
        case "+":
          result = operand1 + operand2;
          break;
        case "-":
          result = operand1 - operand2;
          break;
        case "*":
          result = operand1 * operand2;
          break;
        case "/":
          result = operand1 / operand2;
          break;
      }

      stack.push(result);
    }
  }

  return stack.pop();
}
// console.log(evalPostfixExpre("23*4+"));

//Question10: Write a function to sort a stack using recursion.
// Function to insert an element in the sorted order
function insertSorted(stack, item) {
  // Base case: If stack is empty or the top element is smaller than item, push it
  if (stack.isEmpty() || stack.peek() <= item) {
    stack.push(item);
    return;
  }

  // Remove the top element and recurse
  let top = stack.pop();
  insertSorted(stack, item); // Call function again to insert item correctly

  // Put the removed item back
  stack.push(top);
}

// Function to sort stack recursively
function sortStack(stack) {
  // Base case: If stack has only one element or is empty, return
  if (stack.isEmpty()) return;

  // Remove the top element
  let top = stack.pop();

  // Recursively sort the remaining stack
  sortStack(stack);

  // Insert the removed element back in sorted order
  insertSorted(stack, top);
}
sortStack(stack);
// console.log("Sorted Stack:");
// stack.print();

/////////////////////////Hard
//Question11: How do you design a stack that supports push(), pop(), and getMin() in constant time?
class Stack1 {
  constructor() {
    this.items = [];
    this.minStack = []; // Extra stack to track the minimum value
  }

  // Add item to the stack (Push)
  push(item) {
    this.items.push(item);

    // If minStack is empty or new item is the smallest so far, push it to minStack
    if (
      this.minStack.length === 0 ||
      item <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(item);
    }
  }

  // Remove and return the top item (Pop)
  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const removed = this.items.pop();

    // If the removed element is the minimum, remove it from minStack too
    if (removed === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }

    return removed;
  }

  // View the top item (Peek)
  peek() {
    return this.items[this.items.length - 1];
  }

  // Check if stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  //Question9: Implement a function to find the minimum element in a stack in constant time.
  findMinimum() {
    if (this.minStack.length === 0) {
      return null;
    }
    return this.minStack[this.minStack.length - 1]; // Always returns the minimum element in O(1)
  }
}
const stack1 = new Stack1();
stack1.push(5);
stack1.push(3);
stack1.push(7);
stack1.push(2);
stack1.push(6);
// console.log(stack1.findMinimum()); // Output: 2

//Question12: Implement an LRU (Least Recently Used) cache using a stack.
function lruCache(accesses, cacheSize) {
  const stack = new Stack();
  const cacheSet = new Set();

  for (const current of accesses) {
    if (cacheSet.has(current)) {
      const tempStack = [];
      // Pop elements until the current item is found
      while (!stack.isEmpty() && stack.peek() !== current) {
        tempStack.push(stack.pop());
      }
      // Remove the current item from the stack
      if (!stack.isEmpty()) stack.pop();

      // Restore the elements from tempStack first
      while (tempStack.length > 0) {
        stack.push(tempStack.pop());
      }

      // Push the current item to the top
      stack.push(current);
    } else {
      if (stack.items.length >= cacheSize) {
        // Evict the least recently used (bottom of the stack)
        const lru = stack.items[0];
        cacheSet.delete(lru);
        stack.items.shift(); // Remove from the bottom
      }
      stack.push(current);
      cacheSet.add(current);
    }
  }

  return stack.items;
}
// console.log(lruCache(["A", "B", "C", "A", "D"], 3)); // Expected output: ['C', 'A', 'D']

//Question13: How do you implement a stack using only one queue?
class QueueStack {
  constructor() {
    this.q = [];
  }

  // Explanation; When we push a new item, it's at the end of the queue: But we want that new item to be treated like the top of a stack, which means it needs to be at the front of the queue. So we rotate all the other items behind it. And we do this length - 1 times to push everything else behind the new item.
  push(x) {
    this.q.push(x); // Step 1: enqueue x

    // Step 2: rotate all previous elements behind x
    for (let i = 0; i < this.q.length - 1; i++) {
      // 1. Take the first element 2. Remove it from the front 3. Put it at the back
      this.q.push(this.q.shift());
    }
  }

  pop() {
    if (this.q.length === 0) return "Stack is empty";
    return this.q.shift(); // remove from front (which is the top of the stack)
  }

  top() {
    if (this.q.length === 0) return "Stack is empty";
    return this.q[0]; // front element is the top of the stack
  }

  empty() {
    return this.q.length === 0;
  }
}
const queueStack = new QueueStack();
queueStack.push(10);
queueStack.push(20);
queueStack.push(30);
// console.log(queueStack.pop());

//Question14: Write a function to check if a given arithmetic expression is valid.
function isValid(str) {
  if (!isBalanced(str)) return false;

  const stack = new Stack();
  const isOperand = (char) => /[a-zA-Z0-9]/.test(char);
  const isOperator = (char) => ["+", "-", "*", "/"].includes(char);

  const tokens = str.split(" ").filter((ch) => ch !== "");

  // Check for operator at the beginning or end
  if (isOperator(tokens[0]) || isOperator(tokens[tokens.length - 1]))
    return false;

  for (let i = 0; i < tokens.length; i++) {
    const current = tokens[i];

    // Check current with top of stack
    if (!stack.isEmpty()) {
      const prev = stack.peek();

      if (
        (isOperand(prev) && isOperand(current)) ||
        (isOperator(prev) && isOperator(current))
      ) {
        return false;
      }
    }

    stack.push(current);
  }

  return true;
}
// console.log(isValid("a + b"));

//Question15: Implement a function to convert an infix expression to postfix notation.
function convertInfixToPostfix(str) {
  const stack = new Stack();
  let output = "";

  // Define operator precedence
  const precedence = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
  };

  // Function to check if a character is an operand (number/letter)
  const isOperand = (char) => {
    return /[a-zA-Z0-9]/.test(char);
  };

  // Function to check if a character is an operator
  const isOperator = (char) => {
    return ["+", "-", "*", "/"].includes(char);
  };

  // Iterate through the input string
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === " ") continue; // Skip spaces

    if (isOperand(char)) {
      output += char; // Add operand (number/letter) to the result
    } else if (char === "(") {
      stack.push(char); // Push '(' onto the stack
    } else if (char === ")") {
      // Pop until we encounter '('
      while (!stack.isEmpty() && stack.peek() !== "(") {
        output += stack.pop();
      }
      stack.pop(); // Pop the '(' from the stack
    } else if (isOperator(char)) {
      // Pop operators with higher or equal precedence to the result
      while (!stack.isEmpty() && precedence[char] <= precedence[stack.peek()]) {
        output += stack.pop();
      }
      stack.push(char); // Push current operator onto the stack
    }
  }

  // Pop remaining operators from the stack
  while (!stack.isEmpty()) {
    output += stack.pop();
  }

  return output;
}
// console.log(convertInfixToPostfix("2 + 3 * 4"));
