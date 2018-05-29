'use strict';

const Queue = require('../../lib/queue.js');

describe('Queue Tests', () => {

  let queue = new Queue();
  var serializedQueue = null;

  let loadQueue = () => {
    queue.enqueue('2nd Node');
    queue.enqueue('Head Node');
  };
  loadQueue();

  // Enqueue(value) tests
  it ('test the Queue enqueue() with 2 enqueues', () => {
    queue.enqueue('3rd Node');
    queue.enqueue('4th Node');
    expect(queue.length).toEqual(4);
  });

  it ('test the Queue length with a DeQueue() and a Enqueue(value)', () => {
    queue.dequeue();
    queue.enqueue('New Node');
    expect(queue.length).toEqual(4);
  });

  it ('test the Queue last node\'s value', () => {
    var lastNode = queue.head;
    while (queue.next) {
      lastNode = lastNode.next;
    }
    expect(lastNode.value).toBe('Head Node');
  });

  // Dequeue() tests
  it ('test a Dequeue() and check for the last node', () => {
    queue.dequeue();
    var lastNode = queue.head;
    while (lastNode.next) {
      lastNode = lastNode.next;
    }
    expect(lastNode.value).toBe('New Node');
  });

  it ('test the dequeuing of all the nodes', () => {
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.head.value).toBe(null);
  });

  it ('test for the new head of the Queue', () => {
    queue.enqueue('Last Node');
    queue.enqueue('2nd Node');
    queue.enqueue('3rd Node');

    expect(queue.head.value).toBe('Last Node');

    queue.dequeue();
    expect(queue.head.value).toBe('2nd Node');
  });

  // Serialize / Deserialize tests
  it ('test the serialization of a Queue', () => {
    serializedQueue = queue.serialize();
    let stringToTest = '{"head":{"value":"2nd Node","next":{"value":"3rd Node","next":null}},"length":2}';

    expect(serializedQueue).toEqual(stringToTest);
  });

  it ('test the de-serialization of a Queue', () => {
    expect(queue.deserialize(serializedQueue)).toEqual(queue);
  });

});