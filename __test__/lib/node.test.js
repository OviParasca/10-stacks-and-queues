'use strict';

const Node = require('../../lib/node.js');

describe('Node Tests', () => {

  let node = new Node();


  it ('Testing the Node class constructor', () => {
    expect(node.value).toEqual(undefined);
  });

  it ('Testing the Node class constructor with a value', () => {
    node.value = 'test';
    expect(node.value).toEqual('test');
  });

  it ('Testing the Node class constructor for it\'s next value', () => {
    expect(node.next).toEqual(null);
  });

});
