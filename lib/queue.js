'use strict';

const Node = require('./node.js');

class Queue {

  constructor() {
    this.head = null;
    this.length = 0;
  }

  enqueue(value) {
    let node = new Node(value);

    // This happens if the list is empty
    if (!this.head) {
      this.head = node;
      this.length = 1;

      return this;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    this.length++;

    return this;
  }

  dequeue() {
    if (this.length === 0) {
      return null;
    }

    let oldHead = this.head.data;
    this.head = this.head.next;
    this.length--;

    return oldHead;
  }

  serialize() {
    return JSON.stringify(this);
  }

  deserialize(obj) {
    return JSON.parse(obj);
  }
}

module.exports = Queue;
