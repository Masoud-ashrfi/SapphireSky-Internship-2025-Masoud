/////////////////////////Easy
//Question1: What is a queue, and how does it follow the FIFO principle?
//Answer1: A queue is a type of data structure that stores elements in a specific order. It follows the FIFO (First In, First Out) principle, meaning the first element added to the queue will be the first one to be removed. Think of it like a line at a checkout counter: 1. The first person to stand in line is the first one to be served. 2. People are added to the back of the line, and they leave from the front.

//Question2: Implement a queue using an array in JavaScript.
class Queue {
  constructor() {
    this.items = [];
  }

  // Add an element to the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove and return the front element of the queue
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  //Question5: Write a function to check if a queue is empty.
  isEmpty() {
    return this.items.length === 0;
  }

  // View the front element
  peek() {
    return this.isEmpty() ? "Queue is empty" : this.items[0];
  }

  /////////////////////////Medium
  //Question6: Implement a function to reverse a queue.
  reverse() {
    const reversed = [];

    while (this.items.length > 0) {
      reversed.push(this.items.pop()); // pop from end
    }

    // Put them back in reversed order (preserving queue structure)
    this.items = reversed;
    return this.items;
  }
}
let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
// console.log("Original queue");
// console.log(queue);
// console.log("Reverse queue");
// console.log(queue.reverse());
// console.log(queue.dequeue());
// console.log(queue.peek());

//Question3: How do you implement a queue using a linked list?
class Node {
  constructor(value) {
    this.data = value; // The value of the node
    this.next = null; // The reference to the next node
  }
}

class QueueLinkedList {
  constructor() {
    this.head = null; // Start with an empty queue (front)
    this.tail = null; // We also need to track the tail (end)
    this.length = 0; // Keep track of size
  }

  // Add item to the queue (at the end)
  enqueue(element) {
    const newNode = new Node(element);

    // If the queue is empty
    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // Point the old tail to the new node
      this.tail = newNode; // Update the tail to the new node
    }
    this.length++;
  }

  // Remove and return the front item (from the front)
  dequeue() {
    if (this.head === null) {
      return "Queue is empty";
    }
    const dequeuedData = this.head.data;
    this.head = this.head.next;

    // If the queue is now empty, reset the tail
    if (this.head === null) {
      this.tail = null;
    }

    this.length--;
    return dequeuedData;
  }

  // Optional: Check the front element without removing it
  peek() {
    if (this.head === null) {
      return "Queue is empty";
    }
    return this.head.data;
  }

  // Optional: Check if the queue is empty
  isEmpty() {
    return this.length === 0;
  }

  // Optional: Get the current size of the queue
  size() {
    return this.length;
  }
}
const queueLinkedList = new QueueLinkedList();
queueLinkedList.enqueue(10);
queueLinkedList.enqueue(20);
queueLinkedList.enqueue(30);
// console.log(queueLinkedList);
// console.log(queueLinkedList.dequeue());
// console.log(queueLinkedList.peek());

//Question4: What is the difference between a queue and a stack?
//Answer4: A stack and a queue are both linear data structures, but they work in opposite ways. A stack follows the LIFO principle, which stands for "Last In, First Out." This means the last element added to the stack is the first one to be removed—just like a stack of books where you always remove the top book first. On the other hand, a queue follows the FIFO principle, meaning "First In, First Out." In a queue, the first element added is the first one to be removed—similar to a line of people waiting for tickets where the person who arrives first is served first. In terms of operations, stacks use push to add items and pop to remove them, while queues use enqueue to add items to the end and dequeue to remove items from the front. So, while both structures hold items in order, the main difference lies in where elements are added and removed. Use a stack when you want to "undo" things, or need to backtrack. Use a queue when you want to process things in order, like tasks or requests.

//Question7: How do you implement a queue using two stacks?
class StackQueue {
  constructor() {
    this.s1 = []; // stack for enqueue
    this.s2 = []; // stack for dequeue
  }

  // Enqueue operation (add to the end)
  enqueue(element) {
    this.s1.push(element);
  }

  // Dequeue operation (remove from the front)
  dequeue() {
    if (this.isEmpty()) return "Queue is empty";

    // If s2 is empty, move all elements from s1 to s2
    if (this.s2.length === 0) {
      while (this.s1.length > 0) {
        this.s2.push(this.s1.pop());
      }
    }

    // Pop from s2, which gives the oldest element
    return this.s2.pop();
  }

  // Check if queue is empty
  isEmpty() {
    return this.s1.length === 0 && this.s2.length === 0;
  }
}
const stackQueue = new StackQueue();
stackQueue.enqueue(10);
stackQueue.enqueue(20);
stackQueue.enqueue(30);
// console.log(stackQueue);
// console.log(stackQueue.dequeue());

//Question8: Explain priority queues and their applications.
//Answer: A priority queue is just like a regular queue (FIFO), but every item has a priority. Instead of serving items in the order they were added, it serves the highest priority item first, regardless of when it came in. How it works (basic idea): Each item in the queue has: 1. A value 2. A priority (usually a number — lower number = higher priority) ⚙️ Applications of Priority Queues: 1. 🏥 Emergency Rooms: Patients are treated by urgency, not by arrival time. 2. 🧠 Operating System Process Scheduling: The CPU gives time to more important or urgent processes first. 3. 📡 Dijkstra’s Algorithm (Shortest Path): Used in finding the shortest path in maps or networks (Google Maps, GPS, etc.). 4. 🛫 Airport Runway System: Planes with emergencies land first, even if other planes were waiting.5. 📶 Network Packet Routing: Packets with higher priority (e.g., voice calls or video streams) are sent before less urgent ones like downloads.

//Question9: Implement a circular queue and explain how it works.
class CircularQueue {
  constructor(size) {
    this.size = size; // Max size of the queue
    this.queue = new Array(size); // Array to store the elements
    this.front = -1; // Points to the front of the queue
    this.rear = -1; // Points to the rear of the queue
  }

  // Enqueue operation: Add element to the queue
  enqueue(element) {
    // Check if the queue is full
    if ((this.rear + 1) % this.size === this.front) {
      return "Queue is full";
    }

    // If the queue is empty, set both front and rear to 0
    if (this.front === -1) {
      this.front = 0;
      this.rear = 0;
    } else {
      // Move rear forward in a circular way
      this.rear = (this.rear + 1) % this.size;
    }

    // Add the element
    this.queue[this.rear] = element;
  }

  // Dequeue operation: Remove element from the queue
  dequeue() {
    if (this.front === -1) {
      return "Queue is empty";
    }

    const removed = this.queue[this.front];

    // If only one element was present, reset the queue
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      // Move front forward in a circular way
      this.front = (this.front + 1) % this.size;
    }

    return removed;
  }

  // Front: Get the front item without removing it
  frontItem() {
    if (this.front === -1) {
      console.log("Queue is empty!");
      return;
    }

    console.log(`Front item: ${this.queue[this.front]}`);
    return this.queue[this.front];
  }

  // Rear: Get the rear item without removing it
  rearItem() {
    if (this.rear === -1) {
      console.log("Queue is empty!");
      return;
    }

    console.log(`Rear item: ${this.queue[this.rear]}`);
    return this.queue[this.rear];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.front === -1;
  }

  // Check if the queue is full
  isFull() {
    return (this.rear + 1) % this.size === this.front;
  }
}
const cq = new CircularQueue(5);
// cq.enqueue(10);
// cq.enqueue(20);
// cq.enqueue(30);
// cq.enqueue(40);
// cq.enqueue(50);
// cq.dequeue();
// cq.enqueue(60);
// console.log(cq);
// console.log(cq.frontItem());
// console.log(cq.rearItem());

//Question10: Implement a function to merge two queues in an alternating manner.
function mergeQueues(q1, q2) {
  const mergedQueues = [];

  while (!q1.isEmpty() || !q2.isEmpty()) {
    if (!q1.isEmpty()) mergedQueues.push(q1.dequeue());
    if (!q2.isEmpty()) mergedQueues.push(q2.dequeue());
  }

  return mergedQueues;
}
const q1 = new Queue();
q1.enqueue(1);
q1.enqueue(3);
q1.enqueue(5);
q1.enqueue(7);
q1.enqueue(9);

const q2 = new Queue();
q2.enqueue(2);
q2.enqueue(4);
q2.enqueue(6);
// console.log(mergeQueues(q1, q2));

/////////////////////////Hard
//Question11: How do you design a queue that supports enqueue(), dequeue(), and getMin() in constant time?
class ConstantQueue {
  constructor() {
    this.items = [];
    this.minStack = [];
  }

  // Add an element to the queue
  enqueue(element) {
    this.items.push(element);

    // If minStack is empty or new item is the smallest so far, push it to minStack
    if (
      this.minStack.length === 0 ||
      element <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(element);
    }
  }

  // Remove and return the front element of the queue
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const removed = this.items.shift();

    // If the removed element is the minimum, remove it from minStack too
    if (removed === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }

    return removed;
  }

  getMin() {
    if (this.minStack.length === 0) {
      return null;
    }
    return this.minStack[this.minStack.length - 1]; // Always returns the minimum element in O(1)
  }
}
const constantQueue = new ConstantQueue();
constantQueue.enqueue(5);
constantQueue.enqueue(3);
constantQueue.enqueue(7);
constantQueue.enqueue(2);
constantQueue.enqueue(6);
// console.log(constantQueue.getMin());

//Question12: Implement a function to find the first non-repeating character in a stream of characters using a queue.
function firstNonRepeatingChar(chars) {
  const q = new Queue();
  const charCount = {};

  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    charCount[ch] = (charCount[ch] || 0) + 1;
    q.enqueue(ch);

    // Remove characters from the front of queue that are repeating
    while (!q.isEmpty() && charCount[q.items[0]] > 1) {
      q.dequeue();
    }
  }
  return q.isEmpty() ? null : q.items[0];
}
// console.log(firstNonRepeatingChar(["a", "a", "b", "c", "a", "b", "d", "e"]));

//Question13: How do you implement a multi-level queue with different priorities?
class PriorityQueueItem {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  // Enqueue: Add item in the correct position based on priority
  enqueue(value, priority) {
    const newItem = new PriorityQueueItem(value, priority);
    let added = false;

    for (let i = 0; i < this.items.length; i++) {
      if (newItem.priority < this.items[i].priority) {
        this.items.splice(i, 0, newItem);
        added = true;
        break;
      }
    }

    if (!added) {
      this.items.push(newItem); // add at end if highest priority
    }
  }

  // Dequeue: Remove the item with the highest priority (lowest number)
  dequeue() {
    if (this.isEmpty()) return "Queue is empty!";
    return this.items.shift(); // removes the first item
  }

  // Peek at the front item
  front() {
    if (this.isEmpty()) return "Queue is empty!";
    return this.items[0];
  }

  // Check if queue is empty
  isEmpty() {
    return this.items.length === 0;
  }
}
const pq = new PriorityQueue();
// pq.enqueue("cold", 4);
// pq.enqueue("heart attack", 1);
// pq.enqueue("fever", 3);
// pq.enqueue("broken arm", 2);
// console.log(pq.front());

//Question14: Write a function to simulate a printer queue with different priorities.
const printerQueue = new PriorityQueue();
printerQueue.enqueue("Office Report", 3);
printerQueue.enqueue("Emergency Alert", 1);
printerQueue.enqueue("Funny Meme", 5);
printerQueue.enqueue("Meeting Agenda", 2);
printerQueue.enqueue("System Update", 4);

// Simulate printing
console.log("🖨️ Starting printer...");
while (!printerQueue.isEmpty()) {
  const job = printerQueue.dequeue();
  console.log(`🖨️ Printing: "${job.value}" (Priority: ${job.priority})`);
}

//Question15: Implement a function to process tasks in batches using a queue.
function processTasksInBatches(tasks, batchSize) {
  const q = new Queue();

  for (let i = 0; i < tasks.length; i++) {
    q.enqueue(tasks[i]);
  }

  const batches = Array.from({ length: batchSize }, () => []);

  let batchIndex = 0;

  while (!q.isEmpty()) {
    batches[batchIndex].push(q.dequeue());

    // move to next batch, wrap around if needed
    batchIndex = (batchIndex + 1) % batchSize;
  }

  // print each batch
  for (let i = 0; i < batchSize; i++) {
    console.log(`Batch ${i} : [${batches[i].join(", ")}]`);
  }

  return batches;
}
console.log(
  processTasksInBatches(
    ["Task1", "Task2", "Task3", "Task4", "Task5", "Task6", "Task7"],
    3
  )
);
