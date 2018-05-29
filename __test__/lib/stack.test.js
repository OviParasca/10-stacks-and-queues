'use strict';

const Stack = require('../../lib/stack.js');

describe('Stack Tests', () => {

  let stack = new Stack();
  var serializedStack = null;

  let loadStack = () => {
    stack.push('Head Node');
    stack.push('2nd Node');
  };
  loadStack();

  // Push(value) tests
  it ('test the Stack Push() with 2 pushes', () => {
    stack.push('3rd Node');
    stack.push('4th Node');
    expect(stack.length).toEqual(4);
  });

  it ('test the Stack.length with a Pop() and a Push(value)', () => {
    stack.pop();
    stack.push('Last Node');
    expect(stack.length).toEqual(4);
  });

  it ('test the stack length', () => {
    var lastNode = stack.head;
    while (lastNode.next) {
      lastNode = lastNode.next;
    }
    expect(lastNode.value).toBe('Last Node');
  });

  // Pop() tests
  it ('test a pop()', () => {
    stack.pop();
    var lastNode = stack.head;
    while (lastNode.next) {
      lastNode = lastNode.next;
    }
    expect(lastNode.value).toBe('Last Node');
  });

  it ('test a pop to remove all the nodes', () => {
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.length).toBe(0);
  });

  it ('test a pop() from an empty Stack and a push(value)', () => {
    stack.pop();
    stack.push('Last Node');
    expect(stack.length).toBe(1);
  });

  // Serialize / Deserialize tests
  it ('test the serialization of a Stack', () => {
    serializedStack = stack.serialize();
    let stringToTest = '{"head":{"value":"Head Node","next":{"value":"2nd Node","next":{"value":"3rd Node","next":{"value":"4th Node","next":{"value":"Last Node","next":{"value":"Last Node","next":null}}}}}},"length":1}';

    expect(serializedStack).toEqual(stringToTest);
  });

  it ('test the de-serialization of a Stack', () => {
    expect(stack.deserialize(serializedStack)).toEqual(stack);
  });

});